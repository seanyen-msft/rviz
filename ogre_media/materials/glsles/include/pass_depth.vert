#version 300 es

uniform mat4 worldview_matrix;

out highp float depth;
        
void passDepth( vec4 pos )
{
  vec4 pos_rel_view = worldview_matrix * pos;
  depth = -pos_rel_view.z;
}
