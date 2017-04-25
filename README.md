# daigou_server

该项目是用electrode初始化的，集成electrode有很多好处，electrode是walmart技术部门基于react等时髦前端技术创建的，https://github.com/electrode-io。

test, lint, 或者设置环境变量，可以在搜索前面加上关键字electrode。

比如集成的测试命令 可以看这个链接 http://www.electrode.io/docs/test_components.html

gulp 是用来跑脚本命令的，命令一般写在gulpfile.js里，这里用了electrode-archetype-react-app内置的gulpfile.js, https://www.npmjs.com/package/electrode-archetype-react-app

比如：
How do I run my application tests?

This will run test eslint and your spec tests

$ gulp check

How do I run my application tests without going through eslint (i.e., while I'm developing)?

This will run only your spec tests

$ gulp test-dev

当然也可以这样跑测试, 只是测试文件应该被命名为 xxx.spec.js

mocha test/server/

