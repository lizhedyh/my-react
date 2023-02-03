module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended'
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly',
        'NodeJs': true,
        'React': true,
    },
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 2018,
        'sourceType': 'module',
        'allowImportExportEverywhere': true,
        'ecmaFeatures': {
            'modules': true,
            'legacyDecorators': true
        }
    },
    'plugins': [
        'react',
        'react-hooks',
        '@typescript-eslint'
    ],
    'rules': {
        "no-undef": "error", // 未定义变量 error
        "react/jsx-uses-react": 1, //防止React被错误地标记为未使用
        "react/jsx-uses-vars": 2, // 防止在JSX中使用的变量被错误地标记为未使用
        "@myfe/myfe/no-export-default": "off", // 关闭使用 export default warning
        "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
        "react-hooks/exhaustive-deps": "warn", // 检查 effect 的依赖
        // [强制] 变量名, 属性名, 函数名, 方法名，驼峰格式
        camelcase: ['error', {
          properties: 'always',
          ignoreDestructuring: false,
          allow: [],
        }],
    
        // [强制] 缩进，使用2个空格，严禁使用tab
        indent: ['error', 2],
    
        // [强制] 引号，最外层统一使用单引号
        quotes: ['error', 'single'],
    
        // [强制] 空格，运算符两边
        'space-infix-ops': ['error', {
          int32Hint: true,
        }],
    
        // [强制] 空格，逗号后面
        'comma-spacing': ['error', {
          before: false,
          after: true,
        }],
    
        // [推荐] 空格，保留字(不包含function)和左括号之间，右大括号和其后的保留字之间。任意的左大括号前，以下情况除外：模板字符串内
        'keyword-spacing': ['warn', {
          before: true,
          after: true,
        }],
    
        // [强制] 空格，for循环，分号后及多个前置条件的逗号后
        'semi-spacing': ['error', {
          before: false,
          after: true,
        }],
    
        // [强制] 空格，单行注释‘//’后，多行注释*后。行内注释的’//‘前
        'spaced-comment': ['error', 'always', {
          exceptions: ['-', '+', '*', '-+', '+-'],
          markers: ['/'],
        }],
    
        // [强制] 空格，单行块的’{‘后和’}‘前
        'block-spacing': 'error',
        'object-curly-spacing': ['error', 'always'],
        'space-before-blocks': ['error', 'always'],
    
        // [强制] 空格，对象的属性值前无空格，对象的属性名后有空格
        'key-spacing': ['error', {
          beforeColon: false,
          afterColon: true,
        }],
        'no-whitespace-before-property': 'error',
    
        // [强制] 空格，一元运算符前后
        'space-unary-ops': ['error', {
          words: true,
          nonwords: false,
        }],
    
        // [强制] 空格，function声明和函数表达式的‘(’前，不需要空格
        'space-before-function-paren': ['error', 'never'],
    
    
        // [强制] 空格，函数调用括号前无空格
        'func-call-spacing': ['error', 'never'],
    
        // [强制] 空格，数组的‘[’后和‘]’前无空格
        'array-bracket-spacing': ['error', 'never', {
          singleValue: false,
          objectsInArrays: false,
          arraysInArrays: false,
        }],
        'computed-property-spacing': ['error', 'never'],
    
        // [强制] 空格，运算符的‘(’后和‘)’前，无空格
        'space-in-parens': ['error', 'never'],
    
        // [强制] 空格，禁止多个连续的空格
        'no-multi-spaces': 'error',
    
        // [强制] 空格，无尾随空格
        'no-trailing-spaces': 'error',
    
        // [强制] 空格，箭头函数两头有空格
        'arrow-spacing': ['error', {
          before: true,
          after: true,
        }],
    
        // [强制] 空格，...运算符后无空格
        'rest-spread-spacing': ['error', 'never'],
    
        // [推荐] 换行，代码块‘{’前不需要换行，代码块‘{’后和‘}’前换行。空块可不换行
        'brace-style': ['error', '1tbs', {
          allowSingleLine: true,
        }],
    
        // [强制] 换行，成员运算符和属性在同一行
        'dot-location': ['error', 'property'],
    
        // [强制] 分号，禁止省略行末分号
        semi: ['error', 'always'],
    
        // [推荐] 空行，文件最后保留一个空行
        'eol-last': 'warn',
    
        // [推荐] 空行，注释前保留一个空行
        'lines-around-comment': ['error', {
          beforeBlockComment: true,
          beforeLineComment: true,
          allowBlockStart: true,
          allowObjectStart: true,
          allowArrayStart: true,
          allowClassStart: true,
        }],
    
        // [推荐] 空行，全局变量声明后保留一个空行
        'padding-line-between-statements': ['warn', {
          blankLine: 'always',
          prev: ['const', 'let', 'var'],
          next: '*',
        }, {
          blankLine: 'any',
          prev: ['const', 'let', 'var'],
          next: ['const', 'let', 'var'],
        }],
    
        // [推荐] 括号，控制块（if, else, for, while, try, catch, finally等）总使用大括号。单行if如果可增强可读性，可省略大括号。
        'nonblock-statement-body-position': ['warn', 'beside'],
    
        // [强制] 变量声明，使用const或let，默认使用const。禁止使用
        'no-var': 'error',
    
        // [推荐] 变量声明，一次声明一个变量
        'one-var': ['warn', 'never'],
    
        // [强制] 变量声明，禁止声明不使用的变量
        'no-unused-vars': ['error', {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: true,
        }],
    
        // [推荐] 对象字面量，声明时，如果使用多行的方式，每行末包含一个逗号
        'comma-dangle': ['warn', {
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'always-multiline',
          exports: 'always-multiline',
          functions: 'ignore',
        }],
    
        // [推荐] 对象和数组字面量，优先使用字面量创建数组或对象，而非构造函数
        'no-new-object': 'warn',
        'no-array-constructor': 'warn',
    
        // [强制] 对象和数组字面量，对象声明和赋值时，如果不是动态属性或有特殊符号的属性，禁止混用加引号和未加引号的key
        'quote-props': ['error', 'as-needed', {
          keywords: false,
          unnecessary: true,
          numbers: false,
        }],
    
        // [强制] 对象和数组字面量，对象的成员和方法使用简洁表示法
        'object-shorthand': ['error', 'always', {
          ignoreConstructors: false,
          avoidQuotes: true,
        }],
    
        // [强制] 类，衍生类的构造函数必须调用super
        'constructor-super': 'error',
    
        // [强制] 类，super在this之前调用
        'no-this-before-super': 'error',
    
        // [推荐] 类，不使用空的构造函数
        'no-empty-function': ['warn', {
          allow: ['functions', 'arrowFunctions', 'generatorFunctions', 'methods', 'generatorMethods', 'getters', 'setters'],
        }],
    
        // [强制] 函数，使用默认参数语法代替修改函数参数
        // [推荐] 函数，避免改变参数，改规则由于和上一个冲突，无法设置成推荐，只能先关闭
        'no-param-reassign': ['error', {
          props: false,
        }],
    
        // [推荐] 函数，避免使用arguments.callee 和arguments.caller
        'no-caller': 'warn',
    
        // [推荐] 字符串拼接，优先使用模板字符串
        'prefer-template': 'warn',
    
        // [推荐] 相等和不等运算符，总是使用===和 !==
        eqeqeq: 'warn',
    
        // [推荐] 拓展运算符，使用拓展运算符代替Object.assign
        'prefer-object-spread': 'warn',
    
        // [推荐] 拓展运算符，使用rest语法...代替函数的arguments
        'prefer-rest-params': 'warn',
    
        // [推荐] 解构赋值，使用同一对象或数组的多个属性时，优先使用解构赋值
        'prefer-destructuring': 'warn',
    
        // [推荐]  匿名函数优先使用箭头函数语法
        'prefer-arrow-callback': 'warn',
    
        // [推荐] 箭头函数，如果箭头函数体只有一句返回表达式，且无副作用，省略大括号
        'arrow-body-style': ['warn', 'as-needed'],
    
        // [推荐] 箭头函数，如果箭头函数只有一个参数，省略括号
        'arrow-parens': ['warn', 'as-needed', {
          requireForBlockBody: false,
        }],
    
        // [强制] 线上代码禁止使用console
        'no-console': 'error',
    
        // [推荐] 单行字符数最多120字
        'max-len': ['warn', {
          code: 120,
        }],
      },
};