import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel} from '@ionic/react';
import { personCircle, search, helpCircle, star, create, ellipsisHorizontal, ellipsisVertical } from 'resources/icons';

export const NavigationBar = ()=>(
    <IonTabs>
        <IonTabBar slot="bottom">
            <IonTabButton tab="stat">
                <IonIcon icon={statIcon} />
                <IonLabel>Statistiques</IonLabel>
            </IonTabButton>

            <IonTabButton tab="records">
                <IonIcon icon={recordIcon} />
                <IonLabel>Record</IonLabel>
            </IonTabButton>

            <IonTabButton tab="parameters">
                <IonIcon icon={parametersIcon} />
                <IonLabel>Paramètres</IonLabel>
            </IonTabButton>
        </IonTabBar>
    </IonTabs>
)

ReactDOM.render(<NavigationBar />, document.getElementById("body"))