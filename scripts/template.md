# 成都 JavaScript 开发者

想加入这个列表，请在 [`data.json`](/data.json) 中添加你的信息然后发起一个 Pull Request。

## 开发者列表

昵称|GitHub|标签
---|---|---{% for developer in developers %}
{{ renderName(developer) }}|[@{{ developer.github }}](https://github.com/{{ developer.github }})|{{ wrapTag(developer.tags) }}
{% endfor %}

## License

[![CC0](https://i.creativecommons.org/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)
