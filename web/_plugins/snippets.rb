module Jekyll
  class SnippetsTag < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
      @text = text.strip
    end

    def render(context)
      page = context['page']
      types = page['snippets_types']
      out = '<div class="tabs">'
      basename = File.join('snippets', @text)
      glob_snippets(basename, types).each_with_index { |row, index|
        out << render_tab(row['label'], row['filename'], row['syntax'], index == 0)
      }
      out << '</div>'
    end

    private

    def render_tab(label, filename, syntax, focused)
      name = "snippet-#{@text}"
      id = "snippet-#{@text}-#{label.downcase.gsub(/\s+/, '-')}"
      code = File.read(filename)
      highlighted = highlight(syntax, code)
      checked = focused ? 'checked="checked"' : ''
      <<-HTML
      <input name="#{name}" type="radio" id="#{id}" #{checked}/>
	    <label for="#{id}">#{label}</label>
      <div class="tab">
        <figure class="highlight">
          <pre><code class="language-#{syntax.tr('+', '-')}" data-lang="#{syntax}">#{highlighted}</code></pre>
        </figure>
      </div>
      HTML
    end

    def glob_snippets(basename, types)
      types.map { |ext, params|
        filename = "#{basename}.#{ext}"
        if File.exist? filename
          data = params.clone
          data['filename'] = filename
          data
        else
          nil
        end
      }.compact
    end

    def highlight(lang, code)
      require "rouge"
      formatter = ::Rouge::Formatters::HTMLLegacy.new(
        :line_numbers => false,
        :wrap         => false,
        :css_class    => "highlight",
        :gutter_class => "gutter",
        :code_class   => "code"
      )
      lexer = ::Rouge::Lexer.find_fancy(lang, code) || Rouge::Lexers::PlainText
      formatter.format(lexer.lex(code))
    end
  end
end

Liquid::Template.register_tag('snippets', Jekyll::SnippetsTag)
