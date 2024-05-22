import { useRouter } from 'next/router';
import LotteryDetails from '../../components/LotteryDetails';

export default function LotteryDetailsPage() {
  const router = useRouter();
  const { type } = router.query;

  return <LotteryDetails lotteryType={type} />;
}
