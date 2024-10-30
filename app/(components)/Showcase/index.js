import Image from 'next/image';
import style from './index.css';

export default function Showcase() {
  return (
    <div>
      <Image
        src='/images/product-design.svg'
        width='80'
        height='80'
        alt='blob'
      />
    </div>
  );
}
