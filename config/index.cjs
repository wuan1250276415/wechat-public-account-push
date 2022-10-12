/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx76fc89631bf73ea1',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'cf9b1c4ec0a3e86c457c4a61116afef3',

  PROVINCE: '江西',
  CITY: '南昌',

  USERS: [
    {
      // 想要发送的人的名字
      name: '小熊宝宝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oYm4v5ogecXf_LhJlgCPAZ5jFcFs',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '61qaugS5qT0Boo-yMt1IZ4rYVpOzPq2_pr-QYODsBeM',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '06-25',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '小熊宝宝', year: '1998', date: '06-25',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '小吴', year: '1996', date: '12-01',
        },
        {
          type: '节日', name: '相识纪念日', year: '2016', date: '09-10',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-03-12' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '61qaugS5qT0Boo-yMt1IZ4rYVpOzPq2_pr-QYODsBeM',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oYm4v5vti8CNBNSgoeLrXTmhG30A',
    }
  ],

}

module.exports = USER_CONFIG

