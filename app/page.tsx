import DownloadBanner from "@/components/download-banner/DownloadBanner";
import styles from './content.module.scss';
import FormContent from "@/components/form-content/FormContent";
import StepContent from "@/components/step-content/StepContent";

export default function Home() {
  return (
    <main>
      <div className={styles.content}>
        <div className={styles.content__innerWrapper} >
          <FormContent/>
          <StepContent/>
        </div>
      </div>
        <DownloadBanner/>
    </main>
  );
}
