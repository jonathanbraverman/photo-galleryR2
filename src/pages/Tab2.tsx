import { IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { camera } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { usePhotoGallery } from '../hooks/usePhotoGallery';

const Tab2: React.FC = () => {
  const {takePhoto} = usePhotoGallery();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Photo Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 2 page" />
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={() => takePhoto()}>
          <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>        
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
