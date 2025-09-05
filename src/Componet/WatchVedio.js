import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../util/Slice/appSlice'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useCustom } from '../util/costom/UsedCostam';
const WatchVedio = () => {
  const dispatch = useDispatch();
  const { id } = useParams(); // ✅ correctly destructure
  const vedios = useCustom()
  console.log("--1-2-3---->",vedios);
  
  useEffect(() => {
    console.log("-> id:", id);
    dispatch(closeMenu());
  }, [dispatch, id]);

  return (

    <div className='flex float-left'>
      <div className='mx-10 py-2 w-8/12' >
        {id ? (
          <iframe
            width="1024"
            className='sticky top-0'
            height="600"
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
      <div className='border border-gray-600 my-1'>
        {vedios.map((item, index) => {
  const {
    id, // sometimes YouTube API nests id as { videoId }
    snippet: {
      title,
      thumbnails: { standard },
    },
  } = item;

  return (
    <Link key={index} to={`/watch/`+id}>
      <div className="aspect-video">
        <img
          alt={title}
          src={standard?.url}
          className="w-64 static h-30 object-cover   rounded-lg ml-16 pt-4 shadow-xl"
        />
        <p className="text-sm font-semibold text-nowrap">{title.slice(1,50)}</p>
      </div>
    </Link>
  );
 

           
        })}
      </div>
    </div>
  );
};

export default WatchVedio;
