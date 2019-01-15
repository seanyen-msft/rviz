#version 300 es
precision highp float;
in vec4 oTexcoord4_0;
out highp vec4 fragColor;
in vec4 colour;

// rasterizes a circle that is darker at the borders than in the center

uniform vec4 highlight;
uniform float alpha;


void main()
{
  float ax = oTexcoord4_0.x-0.5;
  float ay = oTexcoord4_0.y-0.5;

  float rsquared = ax*ax+ay*ay;
  float a = (0.25 - rsquared) * 4.0;

  vec3 col = mix(vec3(0.8, 0.8, 0.8) * colour.xyz, colour.xyz, a);

  col = col + col * highlight.xyz;
  
  fragColor = vec4(col, alpha * ceil(a) * colour.a);
}
