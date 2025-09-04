import { useEffect } from 'react'
import { useCustom } from '../util/costom/UsedCostam'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../util/Slice/appSlice'
import { useSearchParams } from "react-router-dom";
const WatchVedio = () => {
  const videos = useCustom()
  const dispatch = useDispatch()
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  console.log(id);
  const {
    thumbnails: { standard },

  } = videos;
  useEffect(() => {
    dispatch(closeMenu())
  }, [dispatch])


  return (
    <div>
      <iframe
        width="300"
        height="300"
        src={standard + id}
        title="YouTube video player"
        frameBorder="1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export default WatchVedio
