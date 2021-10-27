import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel} from '@ionic/react';
import { statIcon, recordIcon, parametersIcon} from 'resources/icons';

export const NavigationBar = ()=> {
    return(
        <IonTabs>
            <IonTabBar slot="bottom">
                <IonTabButton tab="stat">
                    <IonIcon icon={statIcon}/>
                    <IonLabel>Statistiques</IonLabel>
                </IonTabButton>

                <IonTabButton tab="records">
                    <IonIcon icon={recordIcon}/>
                    <IonLabel>Record</IonLabel>
                </IonTabButton>

                <IonTabButton tab="parameters">
                    <IonIcon icon={parametersIcon}/>
                    <IonLabel>Paramètres</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    );
}

//ReactDOM.render(<NavigationBar />, document.getElementById("body"))