(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{210:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"canary-tests"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#canary-tests","aria-hidden":"true"}},[t._v("#")]),t._v(" Canary Tests")]),t._v(" "),s("p",[t._v("Flagger comes with a testing service that can run acceptance and load tests when configured as a webhook.")]),t._v(" "),s("h2",{attrs:{id:"create-tests"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-tests","aria-hidden":"true"}},[t._v("#")]),t._v(" Create tests")]),t._v(" "),s("p",[t._v("Create a Kustomize patch for the podinfo canary in "),s("code",[t._v("overlays/canary.yaml")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" EOF "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tee")]),t._v(" overlays/canary.yaml\napiVersion: flagger.app/v1alpha3\nkind: Canary\nmetadata:\n  name: podinfo\n  namespace: demo\nspec:\n  canaryAnalysis:\n    webhooks:\n      - name: acceptance-test-token\n        type: pre-rollout\n        url: http://flagger-loadtester.demo/\n        timeout: 30s\n        metadata:\n          type: "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n          cmd: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"curl -sd 'test' http://podinfo-canary.demo:9898/token | grep token\"")]),t._v("\n      - name: acceptance-test-tracing\n        type: pre-rollout\n        url: http://flagger-loadtester.demo/\n        timeout: 30s\n        metadata:\n          type: "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n          cmd: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"curl -s http://podinfo-canary.demo:9898/headers | grep X-Request-Id"')]),t._v("\n      - name: load-test\n        url: http://flagger-loadtester.demo/\n        timeout: 5s\n        metadata:\n          cmd: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hey -z 1m -q 10 -c 2 http://podinfo-canary.demo:9898/"')]),t._v("\nEOF\n")])])]),s("p",[t._v("Add the canary patch to the kustomization:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" EOF "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tee")]),t._v(" kustomization.yaml\napiVersion: kustomize.config.k8s.io/v1beta1\nkind: Kustomization\nbases:\n  - base\n  - flux\npatchesStrategicMerge:\n  - overlays/podinfo.yaml\n  - overlays/canary.yaml\nEOF\n")])])]),s("p",[t._v("Apply changes:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -A "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"patch canary tests"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin master "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\nfluxctl "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sync")]),t._v(" --k8s-fwd-ns flux\n")])])]),s("h2",{attrs:{id:"run-tests"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-tests","aria-hidden":"true"}},[t._v("#")]),t._v(" Run tests")]),t._v(" "),s("p",[t._v("Trigger a canary release:")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[t._v("cat << EOF "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" tee overlays/podinfo.yaml\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" apps/v1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deployment\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" podinfo\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" demo\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" podinfod\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" stefanprodan/podinfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("3.1.4\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" PODINFO_UI_LOGO\n              "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//raw.githubusercontent.com/weaveworks/eks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("appmesh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("profile/website/logo/amazon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("eks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("wide.png\nEOF\n")])])]),s("p",[t._v("Apply changes:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -A "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"update podinfo"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin master "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\nfluxctl "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sync")]),t._v(" --k8s-fwd-ns flux\n")])])]),s("p",[t._v("When the canary analysis starts, Flagger will call the pre-rollout webhooks before routing traffic to the canary.\nIf the acceptance test fails, Flagger will retry until the analysis threshold is reached and the canary is rolled back.")]),t._v(" "),s("p",[t._v("Watch Flagger logs:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ kubectl -n appmesh-system logs deployment/flagger -f | jq .msg\n\nNew revision detected! Scaling up podinfo.test\nPre-rollout check acceptance-test-token passed\nPre-rollout check acceptance-test-tracing passed\nAdvance podinfo.test canary weight 5\nAdvance podinfo.test canary weight 10\nAdvance podinfo.test canary weight 15\nAdvance podinfo.test canary weight 20\nAdvance podinfo.test canary weight 25\nAdvance podinfo.test canary weight 30\nAdvance podinfo.test canary weight 35\nAdvance podinfo.test canary weight 40\nAdvance podinfo.test canary weight 45\nAdvance podinfo.test canary weight 50\nCopying podinfo.test template spec to podinfo-primary.test\nRouting all traffic to primary\nPromotion completed! Scaling down podinfo.test\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);