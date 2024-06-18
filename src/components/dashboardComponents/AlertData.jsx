import React from 'react'

export const AlertData = () => {
     
    const lastUpdateDate = '2024-01-09 16:51:31';

    const allAlerts = [
            { id: 1, type: 'Security', Mesage: 'A new process has been created: New Process ID: 1940 Image to hide information etx to eciebe obliged', Date: '2022-11-14 22:49:44'},
            { id: 2, type: 'Security', Mesage: 'A new process has been created: New Process ID: 1940 Image to hide information etx to eciebe obliged', Date: '2022-11-14 22:49:44'},
            { id: 3, type: 'Security', Mesage: 'A new process has been created: New Process ID: 1940 Image to hide information etx to eciebe obliged', Date: '2022-11-14 22:49:44'},
            { id: 4, type: 'Security', Mesage: 'A new process has been created: New Process ID: 1940 Image to hide information etx to eciebe obliged', Date: '2022-11-14 22:49:44'},
            { id: 5, type: 'Security', Mesage: 'A new process has been created: New Process ID: 1940 Image to hide information etx to eciebe obliged', Date: '2022-11-14 22:49:44'},
            { id: 6, type: 'Security', Mesage: 'A new process has been created: New Process ID: 1940 Image to hide information etx to eciebe obliged', Date: '2022-11-14 22:49:44'},
            { id: 7, type: 'Security', Mesage: 'A new process has been created: New Process ID: 1940 Image to hide information etx to eciebe obliged hgjdtrgf dgrfd fghdueyrtg fgdvfhtrfe fgdheyrgftr cvdgfhs', Date: '2022-11-14 22:49:44'},
            { id: 8, type: 'Security', Mesage: 'A new process has been created: New Process ID: 1940 Image to hide information etx to eciebe obliged', Date: '2022-11-14 22:49:44'},
            { id: 9, type: 'Security', Mesage: 'A new process has been created: New Process ID: 1940 Image to hide information etx to eciebe obliged', Date: '2022-11-14 22:49:44'},
            { id: 10, type: 'Security', Mesage: 'A new process has been created: New Process ID: 1940 Image to hide information etx to eciebe obliged', Date: '2022-11-14 22:49:44'},
    ];

  return (
    <div className='alertBody'>
        <div className='lastUpdateTime'>
        Last Updated Time : {lastUpdateDate}
        </div>

        <div className='allUpdatesAlerts'>
            {
                allAlerts.map((alert, index)=> (
                    <div className='Alert'>
                        <div className='messageSection'>
                                {alert.type}: {alert.Mesage}
                        </div>
                        <div className='alertDate'>
                            {alert.Date}
                        </div>
                    </div>
                ))
            }
        </div>

    </div>
  )
}



export const CardAlertData = () => {
    const lastUpdateDate = '2024-01-09 16:51:31';

    const allAlerts = [
            { id: 1, type: 'Security', Mesage: 'A new process has been created: New Process ID: 1940 Image to hide information etx to eciebe obliged', Date: '2022-11-14 22:49:44'},
            { id: 2, type: 'Security', Mesage: 'A new process has been created: New Process ID: 1940 Image to hide information etx to eciebe obliged', Date: '2022-11-14 22:49:44'},
            { id: 3, type: 'Security', Mesage: 'A new process has been created: New Process ID: 1940 Image to hide information etx to eciebe obliged', Date: '2022-11-14 22:49:44'},
            { id: 4, type: 'Security', Mesage: 'A new process has been created: New Process ID: 1940 Image to hide information etx to eciebe obliged', Date: '2022-11-14 22:49:44'},
            { id: 5, type: 'Security', Mesage: 'A new process has been created: New Process ID: 1940 Image to hide information etx to eciebe obliged', Date: '2022-11-14 22:49:44'},
            { id: 6, type: 'Security', Mesage: 'A new process has been created: New Process ID: 1940 Image to hide information etx to eciebe obliged', Date: '2022-11-14 22:49:44'},
            { id: 7, type: 'Security', Mesage: 'A new process has been created: New Process ID: 1940 Image to hide information etx to eciebe obliged hgjdtrgf dgrfd fghdueyrtg fgdvfhtrfe fgdheyrgftr cvdgfhs', Date: '2022-11-14 22:49:44'},
            { id: 8, type: 'Security', Mesage: 'A new process has been created: New Process ID: 1940 Image to hide information etx to eciebe obliged', Date: '2022-11-14 22:49:44'},
            { id: 9, type: 'Security', Mesage: 'A new process has been created: New Process ID: 1940 Image to hide information etx to eciebe obliged', Date: '2022-11-14 22:49:44'},
            { id: 10, type: 'Security', Mesage: 'A new process has been created: New Process ID: 1940 Image to hide information etx to eciebe obliged', Date: '2022-11-14 22:49:44'},
    ];

  return (
    <div className='CardalertBody'>
    <div className='CardlastUpdateTime'>
    Last Updated Time : {lastUpdateDate}
    </div>

    <div className='CardallUpdatesAlerts'>
        {
            allAlerts.map((alert, index)=> (
                <div className='CardAlert'>
                    <div className='CardmessageSection'>
                            {alert.type}: {alert.Mesage}
                    </div>
                    <div className='CardalertDate'>
                        {alert.Date}
                    </div>
                </div>
            ))
        }
    </div>

</div>
  )
}

