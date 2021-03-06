import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={16} height={12} viewBox="0 0 16 12" fill="none" {...props}>
      <Path
        d="M15.665 9.167a2.831 2.831 0 01-5.619.499H5.62a2.83 2.83 0 01-5.61-.332h-.009V7.668l1.667-2.334h-1v-1H7v1l-.25.417-.195.325L6 7h2.518l1.482-2.666V2.334h-1v-1h2.667v.017c.054-.008.11-.018.166-.018.644 0 1.167.523 1.167 1.167 0 .053-.01.106-.016.157l.016.01-.022.057a1.138 1.138 0 01-.159.395l-.486 1.216v1.666l.667.332-.011.008a2.832 2.832 0 012.677 2.826zM2.833 7.668a1.5 1.5 0 100 2.999 1.5 1.5 0 000-2.999zm10 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm0 2a.5.5 0 110-1 .5.5 0 010 1zm-10 0a.5.5 0 11-.001-1 .5.5 0 010 1zm3.833-6.001H1a.333.333 0 01-.333-.334V.334C.668.15.817 0 1.001 0h5.665c.184 0 .332.149.332.334v3a.331.331 0 01-.332.333zm-1-2.666H2v.666h3.667v-.666z"
        fill="#00A3E0"
      />
    </Svg>
  );
}

export default SvgComponent;
