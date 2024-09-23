
import os
import shutil
import glob
import re
from unidecode import unidecode
import json
import yaml
import requests
from urllib import parse

folder_to_remove = glob.glob('./site/*/')
folder_to_remove.append('./site/.vuepress/public/schemas')

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
        footnotes_linking.append(
            (footnote_links[key], footnote_urls[footnote_links[key]])
        )

    return links


def get_contributors(url):

    parse_url = parse.urlsplit(url)
    if 'github.com' in parse_url.netloc:
        api_url = (
            parse_url.scheme+'://api.github.com/repos/'
            + parse_url.path[1:].replace('.git', '')+'/contributors'
        )
    else:
        api_url = (
            parse_url.scheme+'://'+parse_url.netloc+'/api/v4/projects/'
            + parse_url.path[1:].replace('/', '%2F').replace('.git', '')
            + '/repository/contributors'
        )
    try:
        r = requests.get(api_url)
        return len(r.json())
    except Exception:
        return None


allfiles = getListOfFiles('../aggregateur/data/')

for af in allfiles:
    if af.split('.')[-1] == 'md':
        os.makedirs(
            os.path.dirname(af.replace('../aggregateur/data', './site')),
            exist_ok=True
        )
        shutil.copy(af, af.replace('../aggregateur/data', './site'))
        with open(af.replace('../aggregateur/data', './site'), 'r') as file:
            data = file.read()
            data = '---'.join(data.split('---')[2:])
            data = "<MenuSchema />"+data
            # Exception scdl Budget
            data = data.replace('<DocumentBudgetaire>', 'DocumentBudgetaire')
            if af.split('/')[-1] == 'documentation.md':
                links = find_md_links(data)
                for (name, link) in links:
                    if link.startswith('#'):
                        newlink = link.lower()
                        newlink = newlink.replace(' ', '-')
                        newlink = newlink.replace('_', '-')
                        newlink = unidecode(newlink, "utf-8")
                        newlink = newlink.replace('---', '-')
                        data = data.replace(link, newlink)

            fin = open(af.replace('../aggregateur/data', './site'), "wt")
            fin.write(data)
    else:
        os.makedirs(
            os.path.dirname(af.replace('../aggregateur/data', './site/.vuepress/public/schemas')),
            exist_ok=True
        )
        shutil.copy(
            af,
            af.replace('../aggregateur/data', './site/.vuepress/public/schemas')
        )

shutil.copy(
    '../aggregateur/data/schemas.json',
    './site/.vuepress/public/schemas.json'
)

shutil.copy(
    '../aggregateur/data/schemas.yml',
    './site/.vuepress/public/schemas.yml'
)
with open("./site/.vuepress/public/schemas.yml", 'r') as stream:
    data_loaded = yaml.safe_load(stream)

schemas = glob.glob("./site/*/*")

mydict = {}
stats = {}
for s in schemas:
    r = requests.get('https://www.data.gouv.fr/api/1/datasets/?schema=' + s.split('./site/')[1])
    stats[s.split('./site/')[1]] = {}
    stats[s.split('./site/')[1]]['dgv_resources'] = r.json()['total']
    stats[s.split('./site/')[1]]['title'] = data_loaded[s.split('./site/')[1]]['title']
    mydict[s.split('./site/')[1]] = {}
    mydict[s.split('./site/')[1]]['versions'] = {}
    max = '0.0.0'
    for sub in glob.glob(s+"/*"):
        mydict[s.split('./site/')[1]]['versions'][sub.split(s+"/")[1]] = {}
        mydict[s.split('./site/')[1]]['versions'][sub.split(s+"/")[1]]['pages'] = []
        pages = glob.glob(sub+"/*")
        for p in pages:
            mydict[s.split('./site/')[1]]['versions'][sub.split(s+"/")[1]]['pages'].append(p.split(sub+"/")[1])
        for schema_info in data_loaded[s.split('./site/')[1]]['schemas']:
            if sub.split(s+"/")[1] in schema_info['versions']:
                mydict[s.split('./site/')[1]]['versions'][sub.split(s+"/")[1]]['schema_url'] = '/'+s.split('./site/')[1]+'/'+sub.split(s+"/")[1]+'/'+schema_info['path']
        if sub.split(s+"/")[1] > max:
            max = sub.split(s+"/")[1]
    mydict[s.split('./site/')[1]]['latest'] = max
    mydict[s.split('./site/')[1]]['homepage'] = data_loaded[s.split('./site/')[1]]['homepage']

    stats[s.split('./site/')[1]]['contributors'] = get_contributors(
        data_loaded[s.split('./site/')[1]]['homepage']
    )

    mydict[s.split('./site/')[1]]['email'] = data_loaded[s.split('./site/')[1]]['email']
    mydict[s.split('./site/')[1]]['external_tool'] = data_loaded[s.split('./site/')[1]]['external_tool']
    mydict[s.split('./site/')[1]]['external_doc'] = data_loaded[s.split('./site/')[1]]['external_doc']
    mydict[s.split('./site/')[1]]['labels'] = data_loaded[s.split('./site/')[1]]['labels']
    mydict[s.split('./site/')[1]]['type'] = data_loaded[s.split('./site/')[1]]['type']
    shutil.copy(s+"/"+max+"/README.md", s+"/"+"README.md")
    shutil.copy(s+"/"+max+"/README.md", s+"/"+"latest.md")
    os.makedirs(s+"/latest/", exist_ok=True)
    files = glob.glob(s+"/"+max+"/*")
    for f in files:
        print(f)
        shutil.copy(f, s+"/latest/"+os.path.basename(f))


schv = glob.glob("./site/*/*/*/*.md")

for s in schv:
    if s.split('/')[-1] == 'README.md':
        shutil.copy(s, s.replace('/'+s.split('/')[-1], '')+'.md')


with open('./site/.vuepress/public/schema-infos.json', 'w') as fp:
    json.dump(mydict, fp,  indent=4)


with open("../aggregateur/data/issues.yml", 'r') as stream:
    data_loaded = yaml.safe_load(stream)
    data_loaded['references'] = stats

    r = requests.get('https://api.github.com/repos/etalab/schema.data.gouv.fr/issues?q=is%3Aopen+is%3Aissue')
    data_loaded['nb_issues'] = len(r.json())

    with open('./site/.vuepress/public/stats.json', 'w') as fp:
        json.dump(data_loaded, fp,  indent=4)


if os.path.isfile('../api/recommendations.json'):
    if os.path.isfile('../site/site/.vuepress/public/api/recommendations.json'):
        os.remove('../site/site/.vuepress/public/api/recommendations.json')
    shutil.copy(
        '../api/recommendations.json',
        '../site/site/.vuepress/public/api/recommendations.json'
    )
