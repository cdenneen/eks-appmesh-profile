(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{205:function(e,t,s){"use strict";s.r(t);var n=s(0),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"cleanup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cleanup","aria-hidden":"true"}},[e._v("#")]),e._v(" Cleanup")]),e._v(" "),s("p",[e._v("This lab takes about $7/day to run on AWS.\nIf you have a $30 credit, you can run your cluster for 4 days before it will start counting toward your AWS bill.")]),e._v(" "),s("p",[e._v("To cleanup, run the following:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Stop flux")]),e._v("\nkubectl delete ns flux\nkubectl delete ns demo\n\nkubectl delete mesh.appmesh.k8s.aws --all\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Allow some time for the appmesh k8s controller to cleanup resources in AWS")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sleep")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("30")]),e._v("\n\neksctl delete cluster "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --name appmesh "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --region us-west-2\n")])])]),s("p",[e._v("At this point, you may also delete your GitHub repository if you wish.")])])}),[],!1,null,null,null);t.default=a.exports}}]);