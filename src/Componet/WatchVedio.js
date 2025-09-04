 import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../util/Slice/appSlice'
import { useParams } from "react-router-dom";

const WatchVedio = () => {
  const dispatch = useDispatch();
  const { id } = useParams(); // ✅ correctly destructure

  useEffect(() => {
    console.log("-> id:", id);
    dispatch(closeMenu());
  }, [dispatch, id]);

  return (
    <div>
      {id ? (
        <iframe
          width="1050"
          height="500"
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <p>No video selected</p>
      )}
    </div>
  );
};

export default WatchVedio;
