from typetemp.template.smart_template import SmartTemplate
from utils.complete import LLMConfig
from utils.file_tools import write


jinja_source = '''You are a jinja assistant. ChatGPT is an AI assistant that is designed to help users create jinja templates. Jinja is a popular templating language used for web development, and ChatGPT is able. Put all text within ```jinja2
You will be penalized for text outside of ```jinja2


```plaintext
{{ prompt }}
```

```jinja2
'''


class JinjaTemplate(SmartTemplate):
    source = jinja_source
    name = None
    prompt = None
    config = None
    output_format = None


async def render(
    name: str,
    prompt: str,
    config: LLMConfig = LLMConfig(),
    output_format=None
):
    """
    Generate a JinjaTemplate based on a prompt.
    """
    return await JinjaTemplate(name=name, prompt=prompt, config=config, output_format=output_format).render()


async def main():
    import pyperclip
    config = LLMConfig()
    content = await render(name="SmartHelloWorld", prompt=pyperclip.paste(), config=config, output_format="python")
    print(content)
    filename = await write(content)
    print(f"Wrote {filename}")


import asyncio


if __name__ == '__main__':
    asyncio.run(main())
