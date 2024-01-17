---
to: _templates/<%= name %>/<%= action || 'new' %>/hello.ejs.t
sh: /Users/candacechatman/Library/Caches/pypoetry/virtualenvs/slss-jTvq4itD-py3.11/bin/python /Users/candacechatman/dev/nextjs-dashboard/jinja_smart_template.py
force: true
---
---
to: app/hello.js
---
const hello = ```
Hello!
This is your first hygen template.

Learn what it can do here:

https://github.com/jondot/hygen
```

this demonstrates hygen loaded up .hygen.js and extended helpers.


console.log(hello)


