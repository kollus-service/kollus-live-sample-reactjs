import React, { useEffect } from 'react';
import useInfoStore from '../../store/info';

const PlayerView = (props) => {
  const { liveSecurity } = useInfoStore();

  useEffect(() => {
  }, []);

  return (
    <>
      <img
      src={`https://static.live.kr.kollus.com/static/${liveSecurity}/${props.lmckey}/snapshot.png?${props.datetime}`}
      alt={`snap-shot-${props.datetime}`}
      width={180}
      height={135}
      loading="eager"
      onClick={props.changeView}
      style={{cursor:"pointer"}}
      />
    </>
  );
};

export default PlayerView;
