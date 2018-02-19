# TintShader

![Sample image](http://kapitan.fi/_git/tintShader.jpg "Sample image")
![Sample image](http://kapitan.fi/_git/tintShader2.jpg "Sample image")

### Simple toning shader for Three.js

Dirty and simple post-processing shader for creating color moods and mapping black to a color. Includes gain and level settings.

Created for personal needs, dread lightly.

Released under MIT License.


```
var tint = new THREE.ShaderPass( THREE.TintShader );
tint.uniforms[ "tintColor" ].value = new THREE.Vector3(1.4, 1.1, .3, 1.0);
tint.uniforms[ "darkColor" ].value = new THREE.Vector3(0, 0.25, 0.35, 1.0);
tint.uniforms[ "monochrome" ].value = true; // default is false
tint.uniforms[ "level" ].value = .9;
tint.uniforms[ "gain" ].value = 0.02;
```
