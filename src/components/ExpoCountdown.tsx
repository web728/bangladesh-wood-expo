import Link from 'next/link';
import Icon from './Icon';

export default function ExpoCountdown({ dates, venue }: { dates: string; venue: string }) {
  return <section className="cd on-dark" aria-labelledby="cd-title"><div className="container"><div className="cd__inner"><div className="cd__copy"><p className="eyebrow">Next edition</p><h2 id="cd-title" className="h-lg cd__title">Dhaka’s wood industry <em>meets here.</em></h2><p className="cd__meta"><span>{dates}</span><span>{venue}</span></p><Link className="btn btn--copper" href="/visitor-registration">Register for updates <Icon name="arrow" className="arrow" /></Link></div></div></div></section>;
}
