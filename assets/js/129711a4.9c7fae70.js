"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[82935],{37802:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>z,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var n=t(85893),h=t(11151);const s={},a="paint method",d={id:"talawa-mobile-docs/custom_painters_language_icon/LanguageIcon/paint",title:"paint method",description:"- @override",source:"@site/docs/talawa-mobile-docs/custom_painters_language_icon/LanguageIcon/paint.md",sourceDirName:"talawa-mobile-docs/custom_painters_language_icon/LanguageIcon",slug:"/talawa-mobile-docs/custom_painters_language_icon/LanguageIcon/paint",permalink:"/docs/talawa-mobile-docs/custom_painters_language_icon/LanguageIcon/paint",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/custom_painters_language_icon/LanguageIcon/paint.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"LanguageIcon constructor",permalink:"/docs/talawa-mobile-docs/custom_painters_language_icon/LanguageIcon/"},next:{title:"shouldRepaint method",permalink:"/docs/talawa-mobile-docs/custom_painters_language_icon/LanguageIcon/shouldRepaint"}},l={},o=[{value:"Implementation",id:"implementation",level:2}];function r(e){const i={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,h.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"paint-method",children:"paint method"})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["@",(0,n.jsx)(i.a,{href:"https://api.flutter.dev/flutter/dart-core/override-constant.html",children:"override"})]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["void paint\n(",(0,n.jsx)(i.a,{href:"https://api.flutter.dev/flutter/dart-ui/Canvas-class.html",children:"Canvas"})," canvas, ",(0,n.jsx)(i.a,{href:"https://api.flutter.dev/flutter/dart-ui/Size-class.html",children:"Size"})," size)"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.em,{children:(0,n.jsx)("span",{class:"feature",children:"override"})})}),"\n",(0,n.jsxs)("p",{children:["Called whenever the object needs to paint. The given ",(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/dart-ui/Canvas-class.html",children:"Canvas"})," has its\ncoordinate space configured such that the origin is at the top left of the\nbox. The area of the box is the size of the ",(0,n.jsx)("code",{children:"size"})," argument."]}),"\n",(0,n.jsxs)("p",{children:["Paint operations should remain inside the given area. Graphical\noperations outside the bounds may be silently ignored, clipped, or not\nclipped. It may sometimes be difficult to guarantee that a certain\noperation is inside the bounds (e.g., drawing a rectangle whose size is\ndetermined by user inputs). In that case, consider calling\n",(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/dart-ui/Canvas/clipRect.html",children:"Canvas.clipRect"})," at the beginning of ",(0,n.jsx)("a",{href:"../../custom_painters_language_icon/LanguageIcon/paint.md",children:"paint"})," so everything that follows\nwill be guaranteed to only draw within the clipped area."]}),"\n",(0,n.jsxs)("p",{children:["Implementations should be wary of correctly pairing any calls to\n",(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/dart-ui/Canvas/save.html",children:"Canvas.save"}),"/",(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/dart-ui/Canvas/saveLayer.html",children:"Canvas.saveLayer"})," and ",(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/dart-ui/Canvas/restore.html",children:"Canvas.restore"}),", otherwise all\nsubsequent painting on this canvas may be affected, with potentially\nhilarious but confusing results."]}),"\n",(0,n.jsxs)("p",{children:["To paint text on a ",(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/dart-ui/Canvas-class.html",children:"Canvas"}),", use a ",(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/painting/TextPainter-class.html",children:"TextPainter"}),"."]}),"\n",(0,n.jsxs)("p",{children:["To paint an image on a ",(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/dart-ui/Canvas-class.html",children:"Canvas"}),":"]}),"\n",(0,n.jsxs)("ol",{children:[(0,n.jsx)("li",{children:(0,n.jsxs)("p",{children:["Obtain an ",(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/painting/ImageStream-class.html",children:"ImageStream"}),", for example by calling ",(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/painting/ImageProvider/resolve.html",children:"ImageProvider.resolve"}),"\non an ",(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/painting/AssetImage-class.html",children:"AssetImage"})," or ",(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/painting/NetworkImage-class.html",children:"NetworkImage"})," object."]})}),(0,n.jsx)("li",{children:(0,n.jsxs)("p",{children:["Whenever the ",(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/painting/ImageStream-class.html",children:"ImageStream"}),"'s underlying ",(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/painting/ImageInfo-class.html",children:"ImageInfo"})," object changes\n(see ",(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/painting/ImageStream/addListener.html",children:"ImageStream.addListener"}),"), create a new instance of your custom\npaint delegate, giving it the new ",(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/painting/ImageInfo-class.html",children:"ImageInfo"})," object."]})}),(0,n.jsx)("li",{children:(0,n.jsxs)("p",{children:["In your delegate's ",(0,n.jsx)("a",{href:"../../custom_painters_language_icon/LanguageIcon/paint.md",children:"paint"})," method, call the ",(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/dart-ui/Canvas/drawImage.html",children:"Canvas.drawImage"}),",\n",(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/dart-ui/Canvas/drawImageRect.html",children:"Canvas.drawImageRect"}),", or ",(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/dart-ui/Canvas/drawImageNine.html",children:"Canvas.drawImageNine"})," methods to paint the\n",(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/painting/ImageInfo/image.html",children:"ImageInfo.image"})," object, applying the ",(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/painting/ImageInfo/scale.html",children:"ImageInfo.scale"})," value to\nobtain the correct rendering size."]})})]}),"\n",(0,n.jsx)(i.h2,{id:"implementation",children:"Implementation"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-dart",children:"@override\nvoid paint(Canvas canvas, Size size) {\n  final Path path_0 = Path();\n  path_0.moveTo(size.width * 0.2376568, size.height * 0.4381250);\n  path_0.cubicTo(\n    size.width * 0.2321886,\n    size.height * 0.4003127,\n    size.width * 0.2254689,\n    size.height * 0.3343750,\n    size.width * 0.2254689,\n    size.height * 0.3343750,\n  );\n  path_0.lineTo(size.width * 0.2246875, size.height * 0.3343750);\n  path_0.cubicTo(\n    size.width * 0.2246875,\n    size.height * 0.3343750,\n    size.width * 0.2179686,\n    size.height * 0.4003127,\n    size.width * 0.2125000,\n    size.height * 0.4381250,\n  );\n  path_0.lineTo(size.width * 0.1951561, size.height * 0.5553136);\n  path_0.lineTo(size.width * 0.2546886, size.height * 0.5553136);\n  path_0.lineTo(size.width * 0.2376568, size.height * 0.4381250);\n  path_0.close();\n  path_0.moveTo(size.width * 0.9625000, 0);\n  path_0.lineTo(size.width * 0.5250000, 0);\n  path_0.lineTo(size.width * 0.5250000, size.height);\n  path_0.lineTo(size.width * 0.9625000, size.height);\n  path_0.cubicTo(\n    size.width * 0.9832818,\n    size.height,\n    size.width,\n    size.height * 0.9665636,\n    size.width,\n    size.height * 0.9250000,\n  );\n  path_0.lineTo(size.width, size.height * 0.07500000);\n  path_0.cubicTo(\n    size.width,\n    size.height * 0.03343750,\n    size.width * 0.9832818,\n    0,\n    size.width * 0.9625000,\n    0,\n  );\n  path_0.close();\n  path_0.moveTo(size.width * 0.9250000, size.height * 0.3750000);\n  path_0.cubicTo(\n    size.width * 0.9250000,\n    size.height * 0.3956250,\n    size.width * 0.9165636,\n    size.height * 0.4125000,\n    size.width * 0.9062500,\n    size.height * 0.4125000,\n  );\n  path_0.lineTo(size.width * 0.8884364, size.height * 0.4125000);\n  path_0.cubicTo(\n    size.width * 0.8776568,\n    size.height * 0.4862500,\n    size.width * 0.8545318,\n    size.height * 0.5606227,\n    size.width * 0.8217182,\n    size.height * 0.6309364,\n  );\n  path_0.cubicTo(\n    size.width * 0.8348432,\n    size.height * 0.6509364,\n    size.width * 0.8484364,\n    size.height * 0.6700000,\n    size.width * 0.8625000,\n    size.height * 0.6871864,\n  );\n  path_0.cubicTo(\n    size.width * 0.8710932,\n    size.height * 0.6978136,\n    size.width * 0.8739068,\n    size.height * 0.7200000,\n    size.width * 0.8689068,\n    size.height * 0.7378136,\n  );\n  path_0.lineTo(size.width * 0.8565636, size.height * 0.7812500);\n  path_0.cubicTo(\n    size.width * 0.8512500,\n    size.height * 0.7996864,\n    size.width * 0.8395318,\n    size.height * 0.8056227,\n    size.width * 0.8304682,\n    size.height * 0.7946864,\n  );\n  path_0.cubicTo(\n    size.width * 0.8107818,\n    size.height * 0.7703136,\n    size.width * 0.7921886,\n    size.height * 0.7443727,\n    size.width * 0.7751568,\n    size.height * 0.7168727,\n  );\n  path_0.cubicTo(\n    size.width * 0.7581250,\n    size.height * 0.7440636,\n    size.width * 0.7396886,\n    size.height * 0.7703136,\n    size.width * 0.7198432,\n    size.height * 0.7946864,\n  );\n  path_0.cubicTo(\n    size.width * 0.7107818,\n    size.height * 0.8056227,\n    size.width * 0.6990636,\n    size.height * 0.7996864,\n    size.width * 0.6937500,\n    size.height * 0.7812500,\n  );\n  path_0.lineTo(size.width * 0.6814068, size.height * 0.7378136);\n  path_0.cubicTo(\n    size.width * 0.6764068,\n    size.height * 0.7203136,\n    size.width * 0.6792182,\n    size.height * 0.6978136,\n    size.width * 0.6879682,\n    size.height * 0.6871864,\n  );\n  path_0.cubicTo(\n    size.width * 0.7025000,\n    size.height * 0.6693727,\n    size.width * 0.7160932,\n    size.height * 0.6506273,\n    size.width * 0.7287500,\n    size.height * 0.6309364,\n  );\n  path_0.cubicTo(\n    size.width * 0.7164068,\n    size.height * 0.6046864,\n    size.width * 0.7054682,\n    size.height * 0.5778136,\n    size.width * 0.6959386,\n    size.height * 0.5506273,\n  );\n  path_0.cubicTo(\n    size.width * 0.6896886,\n    size.height * 0.5328136,\n    size.width * 0.6925000,\n    size.height * 0.5081273,\n    size.width * 0.7017182,\n    size.height * 0.4971864,\n  );\n  path_0.lineTo(size.width * 0.7118750, size.height * 0.4850000);\n  path_0.lineTo(size.width * 0.7232818, size.height * 0.4715636);\n  path_0.cubicTo(\n    size.width * 0.7317182,\n    size.height * 0.4615636,\n    size.width * 0.7426568,\n    size.height * 0.4662500,\n    size.width * 0.7482818,\n    size.height * 0.4821864,\n  );\n  path_0.cubicTo(\n    size.width * 0.7560932,\n    size.height * 0.5040636,\n    size.width * 0.7651568,\n    size.height * 0.5259364,\n    size.width * 0.7754682,\n    size.height * 0.5475000,\n  );\n  path_0.cubicTo(\n    size.width * 0.7965614,\n    size.height * 0.5031273,\n    size.width * 0.8126568,\n    size.height * 0.4571864,\n    size.width * 0.8223432,\n    size.height * 0.4125000,\n  );\n  path_0.lineTo(size.width * 0.6437500, size.height * 0.4125000);\n  path_0.cubicTo(\n    size.width * 0.6334386,\n    size.height * 0.4125000,\n    size.width * 0.6250000,\n    size.height * 0.3956250,\n    size.width * 0.6250000,\n    size.height * 0.3750000,\n  );\n  path_0.lineTo(size.width * 0.6250000, size.height * 0.3250000);\n  path_0.cubicTo(\n    size.width * 0.6250000,\n    size.height * 0.3043750,\n    size.width * 0.6334386,\n    size.height * 0.2875000,\n    size.width * 0.6437500,\n    size.height * 0.2875000,\n  );\n  path_0.lineTo(size.width * 0.7437500, size.height * 0.2875000);\n  path_0.lineTo(size.width * 0.7437500, size.height * 0.2375000);\n  path_0.cubicTo(\n    size.width * 0.7437500,\n    size.height * 0.2168750,\n    size.width * 0.7521886,\n    size.height * 0.2000000,\n    size.width * 0.7625000,\n    size.height * 0.2000000,\n  );\n  path_0.lineTo(size.width * 0.7875000, size.height * 0.2000000);\n  path_0.cubicTo(\n    size.width * 0.7978136,\n    size.height * 0.2000000,\n    size.width * 0.8062500,\n    size.height * 0.2168750,\n    size.width * 0.8062500,\n    size.height * 0.2375000,\n  );\n  path_0.lineTo(size.width * 0.8062500, size.height * 0.2875000);\n  path_0.lineTo(size.width * 0.9062500, size.height * 0.2875000);\n  path_0.cubicTo(\n    size.width * 0.9165636,\n    size.height * 0.2875000,\n    size.width * 0.9250000,\n    size.height * 0.3043750,\n    size.width * 0.9250000,\n    size.height * 0.3250000,\n  );\n  path_0.lineTo(size.width * 0.9250000, size.height * 0.3750000);\n  path_0.close();\n  path_0.moveTo(0, size.height * 0.07500000);\n  path_0.lineTo(0, size.height * 0.9250000);\n  path_0.cubicTo(\n    0,\n    size.height * 0.9665636,\n    size.width * 0.01671875,\n    size.height,\n    size.width * 0.03750000,\n    size.height,\n  );\n  path_0.lineTo(size.width * 0.4750000, size.height);\n  path_0.lineTo(size.width * 0.4750000, 0);\n  path_0.lineTo(size.width * 0.03750000, 0);\n  path_0.cubicTo(\n    size.width * 0.01671875,\n    0,\n    0,\n    size.height * 0.03343750,\n    0,\n    size.height * 0.07500000,\n  );\n  path_0.close();\n  path_0.moveTo(size.width * 0.09203136, size.height * 0.7503136);\n  path_0.lineTo(size.width * 0.1818750, size.height * 0.2218750);\n  path_0.cubicTo(\n    size.width * 0.1845314,\n    size.height * 0.2065623,\n    size.width * 0.1915625,\n    size.height * 0.1965623,\n    size.width * 0.1996875,\n    size.height * 0.1965623,\n  );\n  path_0.lineTo(size.width * 0.2504682, size.height * 0.1965623);\n  path_0.cubicTo(\n    size.width * 0.2584386,\n    size.height * 0.1965623,\n    size.width * 0.2656250,\n    size.height * 0.2068750,\n    size.width * 0.2682818,\n    size.height * 0.2218750,\n  );\n  path_0.lineTo(size.width * 0.3581250, size.height * 0.7503136);\n  path_0.cubicTo(\n    size.width * 0.3621864,\n    size.height * 0.7746864,\n    size.width * 0.3532818,\n    size.height * 0.8000000,\n    size.width * 0.3403136,\n    size.height * 0.8000000,\n  );\n  path_0.lineTo(size.width * 0.3045318, size.height * 0.8000000);\n  path_0.cubicTo(\n    size.width * 0.3004886,\n    size.height * 0.7999955,\n    size.width * 0.2965523,\n    size.height * 0.7973727,\n    size.width * 0.2933159,\n    size.height * 0.7925318,\n  );\n  path_0.cubicTo(\n    size.width * 0.2900773,\n    size.height * 0.7876864,\n    size.width * 0.2877091,\n    size.height * 0.7808818,\n    size.width * 0.2865614,\n    size.height * 0.7731227,\n  );\n  path_0.lineTo(size.width * 0.2718750, size.height * 0.6734364);\n  path_0.lineTo(size.width * 0.1778125, size.height * 0.6734364);\n  path_0.lineTo(size.width * 0.1635936, size.height * 0.7728136);\n  path_0.cubicTo(\n    size.width * 0.1612500,\n    size.height * 0.7887500,\n    size.width * 0.1539061,\n    size.height * 0.8000000,\n    size.width * 0.1456250,\n    size.height * 0.8000000,\n  );\n  path_0.lineTo(size.width * 0.1098439, size.height * 0.8000000);\n  path_0.cubicTo(\n    size.width * 0.09703136,\n    size.height * 0.8000000,\n    size.width * 0.08796886,\n    size.height * 0.7746864,\n    size.width * 0.09203136,\n    size.height * 0.7503136,\n  );\n  path_0.close();\n\n  final Paint paint0fill = Paint()..style = PaintingStyle.fill;\n  paint0fill.color = const Color(0xff737373).withOpacity(1.0);\n  canvas.drawPath(path_0, paint0fill);\n}\n"})})]})}function z(e={}){const{wrapper:i}={...(0,h.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}},11151:(e,i,t)=>{t.d(i,{Z:()=>d,a:()=>a});var n=t(67294);const h={},s=n.createContext(h);function a(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(h):e.components||h:a(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);