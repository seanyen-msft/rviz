#version 300 es
precision highp float;
out highp vec4 fragColor;
in vec4 colour;

// Passes the fragment color, multiplying a with the alpha param

uniform vec4 highlight;
uniform float alpha;


void main()
{
  vec3 col = colour.xyz + colour.xyz * highlight.xyz;
  fragColor = vec4(col, colour.a * alpha);
}
