import { Link } from 'react-router-dom';
import '../../../../App.css'
import Service from '../Sercivces/Service';
import ActionCard from './ActionCard';


const Action = () => {
  return (
    <div className="bg-[#f2f4f4]">
      <div className='align'>
        <div className='pt-20'>
            <h1 className='text-4xl font-bold'>Take action</h1>
            <h3 className='text-2xl mt-2 text-[#687781] font-semibold'>Simply browse through our fundraising goals and donate to the causes that matter to you.</h3>
        </div>

        <ActionCard></ActionCard>
        <Service></Service> 
        <div className='mt-10 pb-28'>
          <button  className="btn btn-outline text-[#febb00] hover:bg-black hover:text-[#febb00]">
            <Link to={'/availablefoods'} className='py-1 px-4 text-xl font-semibold'>Show All</Link>
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Action;
