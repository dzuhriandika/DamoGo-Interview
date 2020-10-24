import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={20} height={22} viewBox="0 0 20 22" fill="none" {...props}>
      <Path
        d="M4.271 4.271v-3.2A1.068 1.068 0 015.338 0h12.813a1.068 1.068 0 011.068 1.068v14.947a1.068 1.068 0 01-1.068 1.068h-3.2v3.2a1.07 1.07 0 01-1.075 1.068H1.075A1.067 1.067 0 010 20.286V5.338a1.071 1.071 0 011.077-1.067h3.194zM2.138 6.406v12.812h10.674V6.406H2.138zm4.268-2.135h8.542v10.677h2.135V2.135H6.406v2.136zM4.271 9.609h6.406v2.135H4.271V9.609zm0 4.271h6.406v2.135H4.271V13.88z"
        fill="#BBB"
      />
    </Svg>
  );
}

export default SvgComponent;
