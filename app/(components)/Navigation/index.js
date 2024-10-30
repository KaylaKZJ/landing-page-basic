import style from './index.css';

export default function Navigation() {
  return (
    <nav className={style.nav}>
      {/*left */}
      <div>
        <ul>
          <li>Logo</li>
        </ul>
      </div>
      {/*right */}
      <div>
        <ul>
          <li>About</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
}
