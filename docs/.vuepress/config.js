const linkConfig = require('../config/linkConfig.js');
const socialConfig = require('../config/socialConfig');
const footerConfig = require('../config/footerConfig');
const itypedConfig = require('../config/itypedConfig');
const nameplateConfig = require('../config/nameplateConfig');
const navsConfig = require('../config/navsConfig');

module.exports = {
    base:"/blog/",
    theme: 'yur',
    //小图标
    head: [
        // ['script', {src: '//at.alicdn.com/t/font_xxx.js'}]
    ],
    themeConfig: {
        lang: 'zh-CN',
        logo: '/head.png',
        author: 'Seven',
        authorLink: 'https://numseven.github.io/blog',
        //封面图
        // banner: '/city.png',
        locales: {
            title: '花里胡哨',
            description: '能写的都写 不止于编程'
        },
        navs: navsConfig,
        //按钮组
        buttons: [
            {text: '阅读列表', link: '/posts/', type: 'primary'},
            {text: '了解作者', link: '/about.html', type: 'default'},
        ],
        timeline: true,
        links: linkConfig,
        about: true,
        avatar: 'https://static.xmt.cn/cc50c217cbe342ce951324583f2c6139.png',
        //添加社交
        social: socialConfig,
        //页脚
        footer: footerConfig,
        //打字特效
        ityped: itypedConfig,
        //标签数量
        tagSize: 100, // 默认：100
        //标示牌
        nameplate: nameplateConfig,
        //随机封面
        post: {
            // cover: [
            //     '/post/1.jpg',
            //     '/post/2.jpg',
            //     'https://xxx.com/3.jpg',
            //     'https://xxx.com/4.jpg'
            // ],
            //分页
            pageSize: 12,
            pageSizeOptions: ['12', '24', '48', '96']
        },
        //打赏
        reward: [
            'https://static.xmt.cn/ca717dde8ae14ea7ab3c8c74b8711414.png',
            'https://static.xmt.cn/acc7d3d02b0c4a35a3735268cbb2cce0.png'
        ],
        //落下帷幕
        curtain: {
            tip: '页面准备中...',
            textShadow: '#e91e63'
        },

        //客服聊天
        //crisp: 'xxx',

        //添加评论
        //discuss: 'Vssue', //详情查看yur文档  https://imwiki.cn/zh/theme/vuepress-theme-yur.html#vssue

        //百度统计
        // baiDu: {
        //     tongJi: '',
        //     autoPush: true
        // }
        //气泡特效
        post: {
        	bubbles: {
				color: 'random',
				radius: 15,
				density: 0.3,
				clearOffset: 0.2
			}
        },
        //夜间模式
        dark: true,
        
        //cdn
        //cdn: 'https://cdn.jsdelivr.net/gh/cnguu/cnguu.github.io@master/'
    }
};