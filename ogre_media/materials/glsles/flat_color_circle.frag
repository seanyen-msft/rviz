#version 300 es
precision highp float;
in vec4 oTexcoord4_0;
in vec4 colour;

// Draws a circle in the fragment color, multiplying a with the alpha param

uniform vec4 highlight;
uniform float alpha;

void circleImpl( vec4 color, float ax, float ay );

void main()
{
  vec3 col = colour.xyz + colour.xyz * highlight.xyz;
  circleImpl( vec4(col, alpha * colour.a), oTexcoord4_0.x-0.5, oTexcoord4_0.y-0.5 );
}
