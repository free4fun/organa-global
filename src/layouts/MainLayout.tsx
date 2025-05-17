import Loader from '@/components/ui/Loader';
import { useGlobalLoader } from '@/hooks/useGlobalLoader';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { Outlet } from 'react-router-dom';
import CustomCursor from '@/components/ui/CustomCursor';
import ProgressBar from '@/components/ui/ProgressBar';


export default function MainLayout() {
  const isLoading = useGlobalLoader();
  
  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <CustomCursor />
          <ProgressBar />
          <Navbar />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
}
