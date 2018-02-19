# TintShader
Simple toning shader for Three.js

Dirty and simple post-processing shader for creating color moods and mapping black. Created for personal needs, dread lightly.

Released under MIT License.


```
tint.uniforms[ "tintColor" ].value = new THREE.Vector3(.8, .5, .2, 1.0);
tint.uniforms[ "darkColor" ].value = new THREE.Vector3(.1, .2, 0.4, 1.0);
tint.uniforms[ "monochrome" ].value = new THREE.Vector3(.0, .2, 0.4, 1.0);
tint.uniforms[ "amount" ].value = 1;
tint.uniforms[ "level" ].value = .8;
tint.uniforms[ "gain" ].value = 0.02;
```
