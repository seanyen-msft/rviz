#version 300 es
precision highp float;

// Draws an 8-bit image using RGB values from a 256x1 palette texture.

in vec2 UV;
uniform sampler2D eight_bit_image;
uniform sampler2D palette;
uniform float alpha;

out highp vec4 fragColor;

void main()
{
  // The 0.999 multiply is needed because brightness value 255 comes
  // out of texture2D() as 1.0, which wraps around to 0.0 in the
  // palette texture.
  vec4 color = texture( palette, texture( eight_bit_image, UV ).xy );
  fragColor = vec4( color.rgb, color.a * alpha );
}
