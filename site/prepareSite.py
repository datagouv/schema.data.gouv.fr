
import os
import shutil
import glob
import re
from unidecode import unidecode
import json
import yaml
import requests

folder_to_remove = ['./site/schemas','./site/.vuepress/public/schemas']

for folder in folder_to_remove:
    if os.path.exists(folder):
        shutil.rmtree(folder)
    os.mkdir(folder)    


def getListOfFiles(dirName):
    # create a list of file and sub directories 
    # names in the given directory 
    listOfFile = os.listdir(dirName)
    allFiles = list()
    # Iterate over all the entries
    for entry in listOfFile:
        # Create full path
        fullPath = os.path.join(dirName, entry)
        # If entry is a directory then get the list of files in this directory 
        if os.path.isdir(fullPath):
            allFiles = allFiles + getListOfFiles(fullPath)
        else:
            allFiles.append(fullPath)
                
    return allFiles

def find_md_links(md):
    """Returns dict of links in markdown:
    'regular': [foo](some.url)
    'footnotes': [foo][3]
    
    [3]: some.url
    """
    # https://stackoverflow.com/a/30738268/2755116

    INLINE_LINK_RE = re.compile(r'\[([^\]]+)\]\(([^)]+)\)')
    FOOTNOTE_LINK_TEXT_RE = re.compile(r'\[([^\]]+)\]\[(\d+)\]')
    FOOTNOTE_LINK_URL_RE = re.compile(r'\[(\d+)\]:\s+(\S+)')

    links = list(INLINE_LINK_RE.findall(md))
    footnote_links = dict(FOOTNOTE_LINK_TEXT_RE.findall(md))
    footnote_urls = dict(FOOTNOTE_LINK_URL_RE.findall(md))

    footnotes_linking = []
        
    for key in footnote_links.keys():
        footnotes_linking.append((footnote_links[key], footnote_urls[footnote_links[key]]))

    return links


allfiles = getListOfFiles('../aggregateur/data/')

for af in allfiles:
    if(af.split('.')[-1] == 'md'):
        os.makedirs(os.path.dirname(af.replace('../aggregateur/data','./site/schemas')), exist_ok=True)
        shutil.copy(af, af.replace('../aggregateur/data','./site/schemas'))
        with open(af.replace('../aggregateur/data','./site/schemas'), 'r') as file:
            data = file.read()
            data = '---'.join(data.split('---')[2:])
            data = "<MenuSchema />"+data
            # Exception scdl Budget
            data = data.replace('<DocumentBudgetaire>', 'DocumentBudgetaire')
            if(af.split('/')[-1] == 'documentation.md'):
                links = find_md_links(data)
                for (name, link) in links:
                    if(link.startswith('#')):
                        newlink = link.lower()
                        newlink = newlink.replace(' ','-')
                        newlink = newlink.replace('_','-')
                        newlink = unidecode(newlink, "utf-8")
                        newlink = newlink.replace('---','-')
                        data = data.replace(link,newlink)
            
            fin = open(af.replace('../aggregateur/data','./site/schemas'), "wt")
            fin.write(data)
    else:
        os.makedirs(os.path.dirname(af.replace('../aggregateur/data','./site/.vuepress/public/schemas')), exist_ok=True)
        shutil.copy(af, af.replace('../aggregateur/data','./site/.vuepress/public/schemas'))


shutil.copy('../aggregateur/data/schemas.yml', './site/.vuepress/public/schemas.yml')
with open("./site/.vuepress/public/schemas.yml", 'r') as stream:
    data_loaded = yaml.safe_load(stream)


schemas = glob.glob("./site/schemas/*/*")

mydict = {}
stats = {}
for s in schemas:
    r = requests.get('https://www.data.gouv.fr/api/1/datasets/?schema='+s.split('./site/schemas/')[1])
    stats[s.split('./site/schemas/')[1]] = r.json()['total']
    mydict[s.split('./site/schemas/')[1]] = {}
    mydict[s.split('./site/schemas/')[1]]['versions'] = {}
    max = '0.0.0'
    for sub in glob.glob(s+"/*"):
        mydict[s.split('./site/schemas/')[1]]['versions'][sub.split(s+"/")[1]] = {}
        mydict[s.split('./site/schemas/')[1]]['versions'][sub.split(s+"/")[1]]['pages'] = []
        pages = glob.glob(sub+"/*")
        for p in pages:
           mydict[s.split('./site/schemas/')[1]]['versions'][sub.split(s+"/")[1]]['pages'].append(p.split(sub+"/")[1]) 
        for schema_info in data_loaded[s.split('./site/schemas/')[1]]['schemas']:
            if(sub.split(s+"/")[1] in schema_info['versions']):
                mydict[s.split('./site/schemas/')[1]]['versions'][sub.split(s+"/")[1]]['schema_url'] = '/schemas/'+s.split('./site/schemas/')[1]+'/'+sub.split(s+"/")[1]+'/'+schema_info['path']
        if(sub.split(s+"/")[1] > max):
            max = sub.split(s+"/")[1]
    mydict[s.split('./site/schemas/')[1]]['latest'] = max
    mydict[s.split('./site/schemas/')[1]]['homepage'] = data_loaded[s.split('./site/schemas/')[1]]['homepage']
    mydict[s.split('./site/schemas/')[1]]['email'] = data_loaded[s.split('./site/schemas/')[1]]['email']
    mydict[s.split('./site/schemas/')[1]]['external_tool'] = data_loaded[s.split('./site/schemas/')[1]]['external_tool']
    mydict[s.split('./site/schemas/')[1]]['external_doc'] = data_loaded[s.split('./site/schemas/')[1]]['external_doc']
    mydict[s.split('./site/schemas/')[1]]['type'] = data_loaded[s.split('./site/schemas/')[1]]['type']
    shutil.copy(s+"/"+max+"/README.md",s+"/"+"README.md")

with open('./site/.vuepress/public/schema-infos.json', 'w') as fp:
    json.dump(mydict, fp,  indent=4)



with open("../aggregateur/data/issues.yml", 'r') as stream:
    data_loaded = yaml.safe_load(stream)
    with open('./site/.vuepress/public/issues.json', 'w') as fp:
        json.dump(data_loaded, fp,  indent=4)

with open('./site/.vuepress/public/stats.json', 'w') as fp:
    json.dump(stats, fp,  indent=4)