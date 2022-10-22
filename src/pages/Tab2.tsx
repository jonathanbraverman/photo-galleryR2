import { IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonImg, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { camera, trash, close } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { usePhotoGallery } from '../hooks/usePhotoGallery';

const Tab2: React.FC = () => {
  const {photos, takePhoto} = usePhotoGallery();
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
            <IonTitle size="large">Photo Gallery</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 2 page" />
        <IonContent>
          <IonGrid>
            <IonRow>
              {photos.map((photo, index) => (
                <IonCol size="6" key={index}>
                  <IonImg src={photo.webviewPath} />
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        </IonContent>        
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
