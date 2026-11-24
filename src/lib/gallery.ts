import 'server-only';
import type { Shot } from './gallery-types';
import aisle from '@/assets/bangladesh-2026/aisle.webp';
import machinery from '@/assets/bangladesh-2026/machinery.webp';
import laser from '@/assets/bangladesh-2026/laser.webp';
import machineDemo from '@/assets/bangladesh-2026/machine_demo.webp';
import networking from '@/assets/bangladesh-2026/networking.webp';
import meeting from '@/assets/bangladesh-2026/meeting.webp';
import registration from '@/assets/bangladesh-2026/registration.webp';
import seminar from '@/assets/bangladesh-2026/seminar.webp';
import panels from '@/assets/bangladesh-2026/panels.webp';
import tools from '@/assets/bangladesh-2026/tools.webp';
import inauguration from '@/assets/bangladesh-2026/inauguration.webp';
import booth from '@/assets/bangladesh-2026/booth.webp';

/** Curated from the organiser-owned 2026 Bangladesh Wood / BuildCon archive.
 * Clearly construction-only photographs were deliberately excluded. */
const shots: Shot[] = [
  { src: aisle, alt: 'Trade visitors exploring CNC woodworking machinery at Bangladesh Wood Expo 2026', tag: 'Show floor' },
  { src: machinery, alt: 'Buyers inspecting a CNC woodworking machine at Bangladesh Wood Expo 2026', tag: 'Machinery' },
  { src: laser, alt: 'Laser cutting machinery presented on the Bangladesh Wood Expo floor', tag: 'Machinery' },
  { src: machineDemo, alt: 'Wood processing machinery demonstration for trade visitors', tag: 'Machinery' },
  { src: networking, alt: 'Trade visitors and exhibitors networking on the show floor', tag: 'Meetings' },
  { src: meeting, alt: 'Wood industry buyers meeting beside a machinery display', tag: 'Meetings' },
  { src: registration, alt: 'Visitor registration at the co-located Bangladesh trade exhibitions', tag: 'Show floor' },
  { src: seminar, alt: 'Industry professionals attending the 2026 knowledge programme', tag: 'Ceremonies & seminars' },
  { src: panels, alt: 'Decorative wood panels and interior surfaces presented to buyers', tag: 'Materials' },
  { src: tools, alt: 'Woodworking tools demonstrated to trade visitors', tag: 'Machinery' },
  { src: inauguration, alt: 'Bangladesh Wood and co-located exhibitions inauguration ceremony in 2026', tag: 'Ceremonies & seminars' },
  { src: booth, alt: 'Busy wood industry exhibition stand with visiting buyers', tag: 'Show floor' },
];

export async function getGallery(): Promise<Shot[]> { return shots; }
