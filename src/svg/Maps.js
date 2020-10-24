import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={20} height={24} viewBox="0 0 20 24" fill="none" {...props}>
      <Path
        d="M9.807 20.31l5.393-5.319a7.448 7.448 0 000-10.638 7.7 7.7 0 00-10.787 0 7.449 7.449 0 000 10.638l5.394 5.32zm0 3.04L2.872 16.51a9.577 9.577 0 010-13.677 9.9 9.9 0 0113.87 0 9.578 9.578 0 010 13.677L9.806 23.35zm0-11.529a2.15 2.15 0 10-2.179-2.149 2.164 2.164 0 002.18 2.15zm0 2.15a4.3 4.3 0 114.36-4.3 4.328 4.328 0 01-4.36 4.3z"
        fill="#BBB"
      />
    </Svg>
  );
}

export default SvgComponent;
