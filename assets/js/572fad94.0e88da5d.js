"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[91943],{93071:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=t(85893),o=t(11151);const a={},r="invite function",s={id:"talawa-mobile-docs/widgets_invite_child/invite",title:"invite function",description:"Widget invite",source:"@site/docs/talawa-mobile-docs/widgets_invite_child/invite.md",sourceDirName:"talawa-mobile-docs/widgets_invite_child",slug:"/talawa-mobile-docs/widgets_invite_child/invite",permalink:"/docs/talawa-mobile-docs/widgets_invite_child/invite",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/widgets_invite_child/invite.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"iconButton function",permalink:"/docs/talawa-mobile-docs/widgets_invite_child/iconButton"},next:{title:"invite_child library",permalink:"/docs/talawa-mobile-docs/widgets_invite_child/widgets_invite_child-library"}},l={},c=[{value:"Implementation",id:"implementation",level:2}];function d(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"invite-function",children:"invite function"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.a,{href:"https://api.flutter.dev/flutter/widgets/Widget-class.html",children:"Widget"})," invite\n(",(0,i.jsx)(e.a,{href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html",children:"BuildContext"})," context)"]}),"\n",(0,i.jsx)("p",{children:"This widget gives us various options to invite someone to an organization.\nWe can use QR code scanner, social media platforms like twitter, whatsapp, telegram and many more."}),"\n",(0,i.jsx)(e.h2,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-dart",children:'Widget invite(BuildContext context) {\n  _appLanguageService.initialize();\n\n  final String url =\n      \'https://cyberwake.github.io/applink/invite?selectLang=${_appLanguageService.appLocal.languageCode}&setUrl=${GraphqlConfig.orgURI}&selectOrg=${userConfig.currentOrg.id!}\';\n  final String qrData =\n      \'${GraphqlConfig.orgURI}?orgid=${userConfig.currentOrg.id!}\';\n\n  // print(url);\n  // print(qrData);\n\n  return Column(\n    mainAxisSize: MainAxisSize.max,\n    mainAxisAlignment: MainAxisAlignment.center,\n    crossAxisAlignment: CrossAxisAlignment.center,\n    children: [\n      //Scan the below given QR code to join the organization.\n      QrImage(\n        key: const Key("QRcode"),\n        data: qrData,\n        version: QrVersions.auto,\n        size: 200.0,\n        foregroundColor: Colors.black,\n      ),\n      SizedBox(\n        height: SizeConfig.screenHeight! * 0.08,\n      ),\n      Text(\n        \'Scan the QR to join ${userConfig.currentOrg.name}\',\n        style: const TextStyle(color: Colors.black),\n      ),\n      SizedBox(\n        height: SizeConfig.screenHeight! * 0.02,\n      ),\n      //Tap on the Twitter icon to join the organization through Twitter.\n      Row(\n        mainAxisAlignment: MainAxisAlignment.spaceEvenly,\n        mainAxisSize: MainAxisSize.min,\n        children: [\n          iconButton(\n            "Twitter",\n            const FaIcon(\n              FontAwesomeIcons.twitter,\n              size: 35,\n              color: Color(0xFF1DA1F2),\n            ),\n            () async => SocialShare.shareTwitter(\'Join us\', url: url),\n          ),\n          //Tap on the Whatsapp icon to join the organization through Whatsapp.\n          iconButton(\n            "WhatsApp",\n            CustomPaint(\n              size: const Size(\n                50,\n                50 * 1.004,\n              ), //You can Replace [WIDTH] with your desired width for Custom Paint and height will be calculated automatically\n              painter: WhatsappLogo(),\n            ),\n            () async => SocialShare.shareWhatsapp(url),\n          ),\n          iconButton(\n            "Telegram",\n            CustomPaint(\n              size: Size(\n                45,\n                (45 * 1).toDouble(),\n              ), //You can Replace [WIDTH] with your desired width for Custom Paint and height will be calculated automatically\n              painter: TelegramLogo(),\n            ),\n            () async => SocialShare.shareTelegram(url),\n          ),\n          iconButton(\n            "Alt",\n            const FaIcon(\n              FontAwesomeIcons.shareNodes,\n              size: 30,\n              color: Color(0xff40c351),\n            ),\n            () async => SocialShare.shareOptions(url),\n          ),\n        ],\n      )\n    ],\n  );\n}\n'})})]})}function h(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>s,a:()=>r});var i=t(67294);const o={},a=i.createContext(o);function r(n){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),i.createElement(a.Provider,{value:e},n.children)}}}]);