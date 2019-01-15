#version 300 es
precision highp float;
in vec4 oTexcoord4_0;
out highp vec4 fragColor;
in vec4 colour;

// rasterizes a smooth square with ax,ay in [-0.5..0.5]

uniform vec4 highlight;
uniform float alpha;

void main()
{
  float ax = oTexcoord4_0.x-0.5;
  float ay = oTexcoord4_0.y-0.5;

  float blend = smoothstep(-0.48, -0.45, ay) * (1.0 - smoothstep(0.45, 0.48, ay)) *
                smoothstep(-0.48, -0.45, ax) * (1.0 - smoothstep(0.45, 0.48, ax));
  
  float inv_blend = 1.0 - blend;
  vec3 col = blend * colour.xyz + (sign(0.5 - length(vec3(colour.xyz))) * vec3(0.2, 0.2, 0.2) + colour.xyz) * inv_blend;
  
  //alternative version: make color at edge darker
  //vec3 col = (0.5 + 0.5*blend) * colour.xyz;
  
  col = col + col * highlight.xyz;

  fragColor = vec4(col.r, col.g, col.b, alpha * colour.a );
}
