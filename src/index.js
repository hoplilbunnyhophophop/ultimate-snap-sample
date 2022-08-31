module.exports.onRpcRequest = async({ origin, request }) => {
    switch (request.method) {
        case 'hello':
            return wallet.request({
                method: 'snap_confirm',
                params: [{
                    prompt: `Hello, world!`,
                    description: 'This custom confirmation is just for display purposes.',
                    textAreaContent: 'But you can edit the snap source code to make it do something, if you want to!',
                }, ],
            });
        case 'notification':
            var message = request.message
            var noType = request.type
            return wallet.request({
                method: 'snap_notify',
                params: [{
                    type: noType,
                    message: message,
                }, ],
            });

        case 'storeMessage':
            var message = request.message
            return wallet.request({
                method: 'snap_manageState',
                params: ['update', { message: message }],
            });

        case 'getMessage':
            var persistedData = await wallet.request({
                method: 'snap_manageState',
                params: ['get'],
            });
            return persistedData["message"]

        case 'getCoin':
            var dogecoinNode = await wallet.request({
                method: 'snap_getBip44Entropy_3',
            });
            return dogecoinNode

        default:
            throw new Error('Method not found.');
    }
};