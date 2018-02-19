/**
 * @author KAPITAN! / http://kapitan.fi
 *
 * Tint shader.
 * based on alteredq's sepia shader which was based on glfx.js sepia shader
 * https://github.com/evanw/glfx.js
 */

THREE.TintShader = {

	uniforms: {

		"tDiffuse": { type: "t", value: null },
		"amount":   { type: "f", value: 1.0 },
		"tintColor":    { type: "vec4", value: null },
		"darkColor":    { type: "vec4", value: null },
		"level":    	{ type: "float", value: 1.0 },
		"gain":    		{ type: "float", value: 0.0 },
		"monochrome":   { type: "bool", value: false }

	},

	vertexShader: [

		"varying vec2 vUv;",

		"void main() {",

			"vUv = uv;",
			"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

		"}"

	].join( "\n" ),

	fragmentShader: [

		"uniform float amount;",
		"uniform vec4 tintColor;",
		"uniform vec4 darkColor;",
		"uniform float level;",
		"uniform float gain;",
		"uniform bool monochrome;",
		"uniform sampler2D tDiffuse;",

		"varying vec2 vUv;",

		"vec4 toGrayscale(in vec4 color)",
		"{",
		  "float average = (color.r + color.g + color.b) / 3.0;",
		  "return vec4(average, average, average, 1.0);",
		"}",

		"void main() {",
			"vec4 color = texture2D( tDiffuse, vUv );",
			"vec3 c = color.rgb;",

			"float sum = color.r + color.g + color.b;",
			"float darkAmount = 1.0 - sum;",

			"if (monochrome) {",
				"color = level * toGrayscale(color) * (tintColor * amount) + darkColor * amount + gain;",
			"} else {",
				"color = level * color * (tintColor * amount) + darkColor * darkAmount * amount + gain;",
			"}",
/*
			"color.r = dot( c, tintColor );",
			"color.g = dot( c, tintColor );",
			"color.b = dot( c, tintColor );",
*/
			

			"gl_FragColor = vec4( min( vec3( 1.0 ), color.rgb ), color.a );",

		"}"

	].join( "\n" )

};
