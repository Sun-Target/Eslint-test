// ESlint 检查配置
module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended'],

  // add your custom rules here
  //it is base on https://github.com/vuejs/eslint-config-vue
  rules: {
    "vue/max-attributes-per-line": [2, {
      "singleline": 10,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }],
    "vue/singleline-html-element-content-newline": "off",
    "vue/multiline-html-element-content-newline": "off",
    "vue/name-property-casing": ["error", "PascalCase"],
    "vue/no-v-html": "off",
    // 强制 getter 和 setter 在对象中成对出现
    'accessor-pairs': 2,
    // 在箭头函数的箭头之前/之后需要空格
    'arrow-spacing': [2, {
      'before': true,
      'after': true
    }],
    // 在打开块之后和关闭块之前禁止或强制块内的空格
    'block-spacing': [2, 'always'],
    // 需要大括号样式
    'brace-style': [2, '1tbs', {
      'allowSingleLine': true
    }],
    // 驼峰式大小写
    'camelcase': [0, {
      'properties': 'always'
    }],
    // 要求或禁止尾随逗号, 对象或数组属性值后
    'comma-dangle': [2, 'never'],
    // 强制逗号周围的间距, 前面无间距，后面有间距
    'comma-spacing': [2, {
      'before': false,
      'after': true
    }],
    // 逗号样式
    'comma-style': [2, 'last'],
    // 验证super()构造函数中的调用
    'constructor-super': 2,
    // 在模板字符串中强制使用间距
    'curly': [2, 'multi-line'],
    // 在点之前和之后强制换行
    'dot-location': [2, 'property'],
    // 要求或禁止在文件末尾换行
    'eol-last': 2,
    // 需要 === 和 !==
    'eqeqeq': ["error", "always", { "null": "ignore" }],
    // 在生成器函数中在 * 周围强制间距
    'generator-star-spacing': [2, {
      'before': true,
      'after': true
    }],
    // Node err 强制回调错误处理
    'handle-callback-err': [2, '^(err|error)$'],
    // 不允许缩进混合空格和制表符
    'indent': [2, 2, {
      'SwitchCase': 1
    }],
    // 强制在 JSX 属性（jsx-quotes）中一致使用双引号或单引号
    'jsx-quotes': [2, 'prefer-single'],
    // 强制对象字面量属性中的键和值之间保持一致的间距
    'key-spacing': [2, {
      'beforeColon': false,
      'afterColon': true
    }],
    // 在关键字前后强制使用一致的间距
    'keyword-spacing': [2, {
      'before': true,
      'after': true
    }],
    // 要求构造函数名称以大写字母开头
    'new-cap': [2, {
      'newIsCap': true,
      'capIsNew': false
    }],
    // 调用不带参数的构造函数时需要括号
    'new-parens': 2,
    // 禁止Array构造函数, new Array(1, 2, 3) -> error, 支持一个长度参数或字面量
    'no-array-constructor': 2,
    // 禁止使用arguments.caller和arguments.callee
    'no-caller': 2,
    // 关闭不能console
    'no-console': 'off',
    // 禁止修改类声明的变量
    'no-class-assign': 2,
    // 禁止在条件语句中使用赋值运算符
    'no-cond-assign': 2,
    // 禁止修改使用const声明的变量
    'no-const-assign': 2,
    // 禁止在正则表达式中使用控制字符
    'no-control-regex': 0,
    // 禁止删除变量
    'no-delete-var': 2,
    // 禁止function定义中的重复参数
    'no-dupe-args': 2,
    // 禁止类成员中的重复名称
    'no-dupe-class-members': 2,
    // 禁止对象文字中的重复键
    'no-dupe-keys': 2,
    // 禁止重复switch case标签的规则
    'no-duplicate-case': 2,
    // 禁止在正则表达式中使用空字符类
    'no-empty-character-class': 2,
    // 禁止空的解构模式
    'no-empty-pattern': 2,
    // 禁止 eval() 
    'no-eval': 2,
    // 禁止在catch子句中重新分配例外 err = xx
    'no-ex-assign': 2,
    // 禁止扩展本地对象
    'no-extend-native': 2,
    // 禁止不必要的函数绑定 bind方法
    'no-extra-bind': 2,
    // 禁止不必要的布尔类型转换 !!, 使用隐式转换
    'no-extra-boolean-cast': 2,
    // 禁止不必要的括号
    'no-extra-parens': [2, 'functions'],
    // 禁止switch case无效声明
    'no-fallthrough': 2,
    // 禁止浮动小数
    'no-floating-decimal': 2,
    // 禁止重新分配function声明
    'no-func-assign': 2,
    // 禁止隐式 eval()
    'no-implied-eval': 2,
    // 禁止function嵌套块中的变量或声明（无内部声明
    'no-inner-declarations': [2, 'functions'],
    // 禁止在RegExp构造函数中使用无效的正则表达式字符串
    'no-invalid-regexp': 2,
    // 禁止不规则空格
    'no-irregular-whitespace': 2,
    // 禁止迭代器 __iterator__属性
    'no-iterator': 2,
    // 禁止作为变量名称的标签
    'no-label-var': 2,
    // 禁止带标签的语句
    'no-labels': [2, {
      'allowLoop': false,
      'allowSwitch': false
    }],
    // 禁止不必要的嵌套块 {}
    'no-lone-blocks': 2,
    // 不允许缩进混合空格和制表符
    'no-mixed-spaces-and-tabs': 2,
    // 禁止多个空格
    'no-multi-spaces': 2,
    // 禁止多行字符串 \
    'no-multi-str': 2,
    // 禁止多个空行 最大一行
    'no-multiple-empty-lines': [2, {
      'max': 1
    }],
    // 禁止重新分配本机对象
    'no-native-reassign': 2,
    // 不允许否定in表达式中的左操作数
    'no-negated-in-lhs': 2,
    // 禁止Object构造函数
    'no-new-object': 2,
    // 禁止new require
    'no-new-require': 2,
    // 禁止new symbol
    'no-new-symbol': 2,
    // 禁止new 原始包装器实例
    'no-new-wrappers': 2,
    // 禁止将全局对象属性作为函数调用
    'no-obj-calls': 2,
    // 禁止八进制文字
    'no-octal': 2,
    // 禁止在字符串文字中使用八进制转义序列
    'no-octal-escape': 2,
    // 使用__dirnameand __filename(no-path-concat)时禁止字符串连接
    'no-path-concat': 2,
    // 禁止使用__proto__
    'no-proto': 2,
    // 禁止变量重新声明
    'no-redeclare': 2,
    // 禁止在正则表达式文字中使用多个空格
    'no-regex-spaces': 2,
    // 禁止在 return 语句中赋值
    'no-return-assign': [2, 'except-parens'],
    // 禁止自分配
    'no-self-assign': 2,
    // 禁止自我比较
    'no-self-compare': 2,
    // 禁止使用逗号运算符
    'no-sequences': 2,
    // 禁止限制名称的阴影
    'no-shadow-restricted-names': 2,
    // 禁止函数标识符与其应用程序之间的间距
    'no-spaced-func': 2,
    // 禁止稀疏数组
    'no-sparse-arrays': 2,
    // 在调用构造函数之前禁止使用this
    'no-this-before-super': 2,
    // 限制可以作为异常抛出的内容 throw Error对象
    'no-throw-literal': 2,
    // 禁止在行尾使用尾随空格
    'no-trailing-spaces': 2,
    // 禁止未声明的变量
    'no-undef': 2,
    // 禁止初始化为未定义 此规则不检查const声明、解构模式、函数参数和类字段
    'no-undef-init': 2,
    // 禁止混淆的多行表达式
    'no-unexpected-multiline': 2,
    // 禁止while循环的未修改条件
    'no-unmodified-loop-condition': 2,
    // 当存在更简单的替代方案时禁止三元运算符
    'no-unneeded-ternary': [2, {
      'defaultAssignment': false
    }],
    // 禁止循环体只允许一次迭代
    'no-unreachable': 2,
    // 禁止finally块中的控制流语句
    'no-unsafe-finally': 2,
    // 禁止未使用的变量
    'no-unused-vars': [2, {
      'vars': 'all',
      'args': 'none'
    }],
    // 禁止不必要的.call()和.apply()
    'no-useless-call': 2,
    // 禁止在对象和类中使用不必要的计算属性键
    'no-useless-computed-key': 2,
    // 禁止不必要的构造函数
    'no-useless-constructor': 2,
    // 禁止不必要的转义使用
    'no-useless-escape': 0,
    // 禁止在属性前使用空格
    'no-whitespace-before-property': 2,
    // 禁止with声明
    'no-with': 2,
    // 强制变量在函数中一起或单独声明
    'one-var': [2, {
      'initialized': 'never'
    }],
    // 为运算符强制执行一致的换行样式
    'operator-linebreak': [2, 'after', {
      'overrides': {
        '?': 'before',
        ':': 'before'
      }
    }],
    // 要求或禁止在块内填充
    'padded-blocks': [2, 'never'],
    // 需要在对象文字属性名称周围加引号
    'quotes': [2, 'double', {
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }],
    // 要求或禁止使用分号代替 ASI
    'semi': [2, 'never'],
    // 在分号前后强制使用空格
    'semi-spacing': [2, {
      'before': false,
      'after': true
    }],
    // 块前要求或禁止空间
    'space-before-blocks': [2, 'always'],
    // 在函数括号前要求或不允许有空格
    'space-before-function-paren': [2, 'never'],
    // 禁止或强制使用括号内的空格
    'space-in-parens': [2, 'never'],
    // 需要在中缀运算符周围留出空格
    'space-infix-ops': 2,
    // 要求或禁止在一元运算符之前/之后使用空格
    'space-unary-ops': [2, {
      'words': true,
      'nonwords': false
    }],
    // 要求或禁止以空格（空格或制表符）开始注释
    'spaced-comment': [2, 'always', {
      'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
    }],
    // 在模板字符串中强制使用间距
    'template-curly-spacing': [2, 'never'],
    // NaN检查时需要调用isNaN()
    'use-isnan': 2,
    // 强制将typeof表达式与有效字符串进行比较
    'valid-typeof': 2,
    // 要求包装 IIFE
    'wrap-iife': [2, 'any'],
    // 在yield * 表达式周围强制间距
    'yield-star-spacing': [2, 'both'],
    // 要求或禁止yoda条件, 表达式左边应该是变量, 右边应该是字面值
    'yoda': [2, 'never'],
    // 建议使用const
    'prefer-const': 2,
    // 禁止使用debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 在大括号内强制保持一致的间距
    'object-curly-spacing': [2, 'always', {
      objectsInObjects: false
    }],
    // 禁止或强制括号内的空格
    'array-bracket-spacing': [2, 'never']
  }
}
