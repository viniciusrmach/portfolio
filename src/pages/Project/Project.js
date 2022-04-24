import { useParams } from 'react-router-dom';

function Project() {
  let { id } = useParams();

  return (
    <>
      <div>Project id: {id}</div>
    </>
  );
}

export default Project;
