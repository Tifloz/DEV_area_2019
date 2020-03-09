import React from 'react';
import Button from "@material-ui/core/Button";

class ClientApk extends React.Component {
    render() {
        return (
            <div>
                <Button positive as="a" href="/client.apk" download>
                    Download APK
                </Button>
            </div>
        );
    }
}

export default ClientApk;
