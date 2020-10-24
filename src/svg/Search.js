import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        d="M6.702 0C3.016 0 0 3 0 6.667c0 3.666 3.016 6.666 6.702 6.666a6.624 6.624 0 003.602-1.041L14.157 16 16 14.083l-3.77-3.666a6.53 6.53 0 001.173-3.75C13.403 3 10.387 0 6.702 0zm0 2.667a3.99 3.99 0 014.02 4c0 2.225-1.784 4-4.02 4a3.99 3.99 0 01-4.021-4c0-2.225 1.784-4 4.02-4z"
        fill="#D8D8D8"
      />
    </Svg>
  );
}

export default SvgComponent;
