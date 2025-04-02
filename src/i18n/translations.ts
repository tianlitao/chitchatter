export const resources = {
  en: {
    translation: {
      home: 'Home',
      settings: 'Settings',
      about: 'About',
      disclaimer: 'Disclaimer',
      changeTheme: 'Change theme',
      buildSignature: 'Build signature',
      closeMenu: 'Close menu',
      navigationMenu: 'Navigation menu',
      switchToZh: 'Switch to Chinese',
      switchToEn: 'Switch to English',
      appName: 'Chitchatter',
      yourUsername: 'Your username',
      roomNameLabel: 'Room name (generated on your device)',
      regenerateRoomId: 'Regenerate room id',
      joinPublicRoom: 'Join public room',
      joinPrivateRoom: 'Join private room',
      getEmbedCode: 'Get embed code',
      introText:
        'This is a free communication tool that is designed for simplicity, privacy, and security. All interaction between you and your online peers is encrypted. There is no record of your conversation once you all leave.',
      openMenu: 'Open menu',
      licensedUnder: 'Licensed under',
      pleaseRead: 'Please',
      readDocs: 'read the docs',
      communityRooms: 'Community rooms',
      communityRoomsDescription:
        "You can also chat in a public community room. You'll be anonymous, but be careful what information you choose to share.",
      room: 'Room',
      join: 'Join',
      chat: 'Chat',
      messageBackgroundNotification:
        'When a message is received in the background:',
      playSound: 'Play a sound',
      showNotification: 'Show a notification',
      selectSound: 'Select a sound that plays when you receive a message:',
      showTypingIndicators: 'Show active typing indicators',
      typingIndicatorsNote:
        'Disabling this will also hide your active typing status from others.',
      data: 'Data',
      exportProfileData: 'Export profile data',
      exportProfileDescription:
        'Export your Chitchatter profile data so that it can be moved to another browser or device.',
      exportProfileWarning:
        'Be careful not to share the exported data with anyone',
      importProfileData: 'Import profile data',
      importProfileDescription:
        'Import your Chitchatter profile that was previously exported from another browser or device.',
      deleteAllDataAndRestart: 'Delete all data and restart',
      dataStorageDisclaimer:
        'Chitchatter only stores user preferences and never message content of any kind. This preference data is only stored locally on your device and not a server.',
      containsVerificationKeys: 'It contains your unique verification keys',
      profileImportSuccess: 'Profile successfully imported',
      deleteAllProfileData: 'Delete all profile data',
      beCarefulWithThis: 'Be careful with this',
      userNameChangeWarning: 'This will cause your user name to change from',
      userNameChangeWarning2:
        'to a new, randomly-assigned name. It will also reset all of your saved Chitchatter application preferences.',
      aboutContent: `
### User Guide

Chitchatter is a communication tool designed to make secure and private communication accessible to all. Please [see the README](https://github.com/jeremyckahn/chitchatter/blob/develop/README.md) for full project documentation.

#### Chat rooms

Public rooms can be joined by **anyone** with the room URL. By default, rooms are given a random and unguessable name. You can name your room whatever you'd like, but keep in mind that simpler room names are more guessable by others. For maximum security, consider using the default room name.

Private rooms can only be joined by peers with a matching password. The password must be mutually agreed upon before joining. If peers submit mismatching passwords, they will be in the room but be unable to connect to each other. **No error will be shown** if there is a password mismatch because there is no central arbitrating mechanism by which to detect the mismatch.

To connect to others, share the room URL with a secure tool such as [Burner Note](https://burnernote.com/) or [Yopass](https://yopass.se/). You will be notified when others join the room.

##### Peer verification

When you connect with a peer, Chitchatter automatically attempts to use [public-key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography) to verify them. You can see everyone's public keys in the peer list. Feel free to share your public key with others (it is not sensitive information) so that they can uniquely identify you.

All public and private keys are generated locally. Your private key is never sent to any peer or server.

##### Conversation backfilling

Conversation transcripts are erased from local memory as soon as you close the page or navigate away from the room. Conversations are only ever held in volatile memory and never persisted to any disk by Chitchatter.

When a peer joins a **public** room with participants already in it, the new peer will automatically request the transcript of the conversation that has already taken place from the other peers. Once all peers leave the room, the conversation is completely erased. Peers joining a **private** room will not get the conversation transcript backfilled.

Chat transcript history is limited to {{messageTranscriptSizeLimit}} messages for all rooms.

#### Message Authoring

Chat messages support [GitHub-flavored Markdown](https://github.github.com/gfm/) with code syntax highlighting.

Press \`Enter\` to send a message. Press \`Shift + Enter\` to insert a line break. Message size is limited to {{messageCharacterSizeLimit}} characters.
      `,
      disclaimerContent: `
### Interpretation and Definitions

#### Interpretation

The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.

#### Definitions

For the purposes of this Disclaimer:

*   **Project** (referred to as either "the Project", "We", "Us" or "Our" in this Disclaimer) refers to Chitchatter.
*   **Service** refers to the Website.
*   **You** means the individual accessing the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
*   **Website** refers to Chitchatter, accessible from [https://chitchatter.im](https://chitchatter.im)

### Disclaimer

The information contained on the Service is for general information purposes only.

The Project assumes no responsibility for errors or omissions in the contents of the Service.

In no event shall the Project be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service. The Project reserves the right to make additions, deletions, or modifications to the contents on the Service at any time without prior notice.

The Project does not warrant that the Service is free of viruses or other harmful components.

#### External Links Disclaimer

The Service may contain links to external websites that are not provided or maintained by or in any way affiliated with the Project.

Please note that the Project does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.

#### Errors and Omissions Disclaimer

The information given by the Service is for general guidance on matters of interest only. Even if the Project takes every precaution to insure that the content of the Service is both current and accurate, errors can occur. Plus, given the changing nature of laws, rules and regulations, there may be delays, omissions or inaccuracies in the information contained on the Service.

The Project is not responsible for any errors or omissions, or for the results obtained from the use of this information.

#### Views Expressed Disclaimer

The Service may contain views and opinions which are those of the authors and do not necessarily reflect the official policy or position of any other author, agency, organization, employer or company, including the Project.

Messages sent by users are their sole responsibility and the users will take full responsibility, liability and blame for any libel or litigation that results from something written in or as a direct result of something written in a message. The Project is not liable for any messages sent by users.

#### No Responsibility Disclaimer

In no event shall the Project or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever arising out of or in connection with your access or use or inability to access or use the Service.

#### "Use at Your Own Risk" Disclaimer

All information in the Service is provided "as is", with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, express or implied, including, but not limited to warranties of performance, merchantability and fitness for a particular purpose.

The Project will not be liable to You or anyone else for any decision made or action taken in reliance on the information given by the Service or for any consequential, special or similar damages, even if advised of the possibility of such damages.

      `,
      usernameChangedTo: 'Username changed to "{{username}}"',
      usernameReset: 'Username reset',
      revealUserInfo: 'Reveal your user info',
      publicKeyInfo: 'Your public key (generated locally):',
      privateKeyInfo:
        'Your private key, which was also generated locally, is hidden and only exists on your device.',
      close: 'Close',
      copyCurrentUrl: 'Copy current URL',
      showQRCode: 'Show QR Code',
      hideRoomControls: 'Hide Room Controls',
      showRoomControls: 'Show Room Controls',
      enterFullscreen: 'Enter fullscreen',
      exitFullscreen: 'Exit fullscreen',
      fullscreen: 'Fullscreen',
      showPeerList: 'Click to show peer list',
      peerList: 'Peer list',
      privateRoomUrlCopied:
        'Private room URL with password copied to clipboard',
      privateRoomUrlWithoutPassCopied:
        'Private room URL without password copied to clipboard',
      currentUrlCopied: 'Current URL copied to clipboard',
      incorrectPassword: 'Incorrect password entered. Please wait 2s to retry.',
      copyUrlWithPassword: 'Copy URL with password',
      simple: 'Simple',
      privateRoomUrlDescription:
        'Copy URL to this private room containing an indecipherable hash of the password. When using this URL, users will not need to enter the password themselves.',
      urlSharingWarning:
        'Be careful where and how this URL is shared. Anybody who obtains it can enter the room. The sharing medium must be trusted, as well as all potential recipients of the URL, just as if you were sharing the password itself.',
      browserHistoryWarning:
        'By design, the password hash does not leave the web browser when this URL is used to access the room. However, web browsers can still independently record the full URL in the address history, and may even store the history in the cloud if configured to do so.',
      understandRisks: 'I understand the risks',
      password: 'Password',
      copyUrlWithPasswordTooltip:
        'Copy room URL with password. No password entry required to access room.',
      copyUrlTooltip: 'Copy room URL. Password required to access room.',
      advanced: 'Advanced',
      copyUrl: 'Copy URL',
      poweredBy: 'This conversation is powered by',
      roomPassword: 'Room Password',
      passwordPromptDescription:
        'You will only be able to connect to room peers that enter the same password. Due to the decentralized nature of Chitchatter, it is impossible to know if the password you enter will match the password entered by other peers.',
      passwordMismatchWarning:
        'If there is a mismatch, you will be in the room but be unable to connect to others. An error will not be shown.',
      hidePassword: 'Hide password',
      showPassword: 'Show password',
      goBack: 'Go back',
      submit: 'Submit',
      microphoneVolume: 'Their microphone volume',
      screenVolume: "Their screen's volume",
      volume: 'Volume',
      environmentUnsupported: 'Environment Unsupported',
      browserNotSupported:
        'Your browser does not support the features required to run Chitchatter.',
      requiredFeatures: 'Required features:',
      webRTC: 'WebRTC',
      webCrypto: 'Web Crypto',
      indexedDB: 'IndexedDB',
      recommendedBrowsers: 'Recommended browsers:',
      connectionFailed: 'Connection Failed',
      serverConnectionLost: 'Lost connection to the signaling server.',
      tryReconnecting: 'Try reconnecting',
      newVersionAvailable: 'New Version Available',
      upgradeMessage:
        'A new version of Chitchatter is available. Please refresh the page to upgrade.',
      refresh: 'Refresh',
      startupIssuesDetected:
        'Chitchatter is unable to start up. The following issues were detected:',
      notSecureContext: 'The app is not being served from a',
      secureContext: 'secure context',
      webRTCNotSupported:
        'Your browser does not support WebRTC. Consider using',
      useSupportedBrowser: 'a browser that does',
      serverConnectionFailed: 'Server connection failed',
      pairingServerNotFound:
        "A pairing server could not be found. Make sure you are connected to the internet. If you still can't connect, try:",
      refreshPage: 'Refreshing the page',
      disableAdBlocker: 'Disabling any adblockers',
      tryDifferentNetwork: 'Connecting to a different network',
      updateNeeded: 'Update needed',
      updateDescription:
        'In order to function properly, Chitchatter needs to be updated. The update has already been installed in the background. All you need to do is reload the page or click "Refresh" below.',
      scanQRCode: 'Scan QR Code',
      qrCodeDescription:
        'Scan this QR code with your mobile device to join this room.',
      you: 'You',
      connectionType: 'Connection type',
      connectionQuality: 'Connection quality',
      searchingForPeers: 'Searching for peers...',
      closePeerList: 'Close peer list',
      trackerConnection: 'Tracker Connection',
      searchingForServers: 'Searching for servers...',
      fullNetworkConnectionTooltip:
        'Connections can be established with all peers that also have a full network connection.',
      fullNetworkConnection: 'Full network connection',
      partialNetworkConnectionTooltip:
        'Relay server is unavailable. Connections can only be established when a relay server is not needed for either peer.',
      partialNetworkConnection: 'Partial network connection',
      noNetworkConnectionTooltip:
        'Pairing server is unavailable. Peer connections cannot be established.',
      noNetworkConnection: 'No network connection',
      embeddingChitchatter: 'Embedding Chitchatter',
      iframeSnippetInstruction:
        'Copy and paste this <code>iframe</code> HTML snippet into your project:',
      advancedEmbedding: 'Advanced Embedding',
      sdkEmbedDescription:
        'As an alternative to using an {{iframeTag}}, you can use the {{sdkLink}} to embed a chat room as a {{webComponentLink}} with additional configuration options:',
      turnOffMicrophone: 'Turn off microphone',
      turnOnMicrophoneHint:
        'Turn on microphone and speak to room (hold ctrl + ` to speak)',
      call: 'call',
      microphoneSelection: 'Microphone selection',
      microphoneToUse: 'Microphone to use',
      selectedMicrophone: 'Selected microphone',
    },
  },
  zh: {
    translation: {
      home: '首页',
      settings: '设置',
      about: '关于',
      disclaimer: '免责声明',
      changeTheme: '切换主题',
      buildSignature: '构建签名',
      closeMenu: '关闭菜单',
      navigationMenu: '导航菜单',
      switchToZh: '切换到中文',
      switchToEn: '切换到英文',
      appName: 'Chitchatter',
      yourUsername: '你的用户名',
      roomNameLabel: '房间名称（在你的设备上生成）',
      regenerateRoomId: '重新生成房间ID',
      joinPublicRoom: '加入公共房间',
      joinPrivateRoom: '加入私人房间',
      getEmbedCode: '获取嵌入代码',
      introText:
        '这是一个注重简单性、隐私性和安全性的免费通讯工具。你与在线伙伴之间的所有互动都经过加密。当所有人离开后，不会保留任何对话记录。',
      openMenu: '打开菜单',
      licensedUnder: '基于以下许可',
      pleaseRead: '请',
      readDocs: '阅读文档',
      communityRooms: '社区房间',
      communityRoomsDescription:
        '你也可以在公共社区房间聊天。虽然你是匿名的，但请谨慎分享个人信息。',
      room: '房间',
      join: '加入',
      chat: '聊天',
      messageBackgroundNotification: '当在后台收到消息时：',
      playSound: '播放声音',
      showNotification: '显示通知',
      selectSound: '选择收到消息时播放的声音：',
      showTypingIndicators: '显示正在输入状态',
      typingIndicatorsNote: '禁用此功能也会对其他人隐藏你的输入状态。',
      data: '数据',
      exportProfileData: '导出个人资料',
      exportProfileDescription:
        '导出你的 Chitchatter 个人资料，以便转移到其他浏览器或设备。',
      exportProfileWarning: '请注意不要与任何人分享导出的数据',
      importProfileData: '导入个人资料',
      importProfileDescription:
        '导入之前从其他浏览器或设备导出的 Chitchatter 个人资料。',
      deleteAllDataAndRestart: '删除所有数据并重启',
      dataStorageDisclaimer:
        'Chitchatter 只存储用户偏好设置，从不存储任何形式的消息内容。这些偏好设置数据仅存储在你的设备上，而不是服务器上。',
      containsVerificationKeys: '它包含你的唯一验证密钥',
      profileImportSuccess: '个人资料导入成功',
      deleteAllProfileData: '删除所有个人资料',
      beCarefulWithThis: '请谨慎操作',
      userNameChangeWarning: '这将会把你的用户名从',
      userNameChangeWarning2:
        '更改为一个新的随机分配的名称。同时也会重置所有已保存的 Chitchatter 应用程序设置。',
      aboutContent: `
  ### 用户指南
  
  Chitchatter 是一个旨在让安全和私密通信对所有人都可访问的通信工具。完整的项目文档请[查看 README](https://github.com/jeremyckahn/chitchatter/blob/develop/README.md)。
  
  #### 聊天室
  
  公共房间可以被**任何**拥有房间 URL 的人加入。默认情况下，房间会被赋予一个随机且无法猜测的名称。你可以随意命名你的房间，但请记住，越简单的房间名越容易被他人猜到。为了最大程度的安全，建议使用默认的房间名。
  
  私人房间只能由具有匹配密码的用户加入。加入前必须相互约定密码。如果用户提交的密码不匹配，他们将在房间中但无法相互连接。由于没有中央仲裁机制来检测不匹配，因此密码不匹配时**不会显示错误**。
  
  要与他人连接，请使用安全工具（如 [Burner Note](https://burnernote.com/) 或 [Yopass](https://yopass.se/)）分享房间 URL。当其他人加入房间时，你会收到通知。
  
  ##### 对等验证
  
  当你与对等方连接时，Chitchatter 会自动尝试使用[公钥加密](https://en.wikipedia.org/wiki/Public-key_cryptography)来验证他们。你可以在对等方列表中看到每个人的公钥。你可以随意与他人分享你的公钥（这不是敏感信息），这样他们就能唯一地识别你。
  
  所有公钥和私钥都是在本地生成的。你的私钥永远不会发送给任何对等方或服务器。
  
  ##### 对话回填
  
  当你关闭页面或离开房间时，对话记录会立即从本地内存中删除。对话仅保存在易失性内存中，Chitchatter 永远不会将其持久化到任何磁盘上。
  
  当对等方加入已有参与者的**公共**房间时，新加入的对等方会自动向其他对等方请求已发生的对话记录。一旦所有对等方离开房间，对话就会被完全删除。加入**私人**房间的对等方将不会获得对话记录的回填。
  
  所有房间的聊天记录历史限制为 {{messageTranscriptSizeLimit}} 条消息。
  
  #### 消息编辑
  
  聊天消息支持带有代码语法高亮的 [GitHub 风格的 Markdown](https://github.github.com/gfm/)。
  
  按 \`Enter\` 发送消息。按 \`Shift + Enter\` 插入换行。消息大小限制为 {{messageCharacterSizeLimit}} 个字符。
        `,
      disclaimerContent: `
### 解释和定义

#### 解释

首字母大写的词语在以下条件下具有定义的含义。无论这些定义是单数还是复数形式出现，都应具有相同的含义。

#### 定义

就本免责声明而言：

*   **项目**（在本免责声明中称为"项目"、"我们"或"我们的"）指的是 Chitchatter。
*   **服务**指的是网站。
*   **您**指访问服务的个人，或公司，或代表其访问或使用服务的其他法律实体。
*   **网站**指可从 [https://chitchatter.im](https://chitchatter.im) 访问的 Chitchatter。

### 免责声明

服务中包含的信息仅供一般参考之用。

项目不对服务内容中的错误或遗漏承担任何责任。

在任何情况下，项目均不对因使用服务或服务内容而产生的或与之相关的任何特殊、直接、间接、后果性或附带损害或任何损害负责，无论是在合同诉讼、疏忽或其他侵权行为中。项目保留随时在不事先通知的情况下对服务内容进行添加、删除或修改的权利。

项目不保证服务不含病毒或其他有害组件。

#### 外部链接免责声明

服务可能包含指向外部网站的链接，这些网站不由项目提供、维护或以任何方式附属于项目。

请注意，项目不保证这些外部网站上任何信息的准确性、相关性、及时性或完整性。

#### 错误和遗漏免责声明

服务提供的信息仅作为感兴趣事项的一般指导。即使项目采取一切预防措施确保服务内容既是最新的又是准确的，错误仍可能发生。此外，考虑到法律、规则和法规的不断变化性质，服务中包含的信息可能存在延迟、遗漏或不准确。

项目不对任何错误或遗漏，或使用此信息所获得的结果负责。

#### 观点表达免责声明

服务可能包含作者的观点和意见，这些观点和意见不一定反映任何其他作者、机构、组织、雇主或公司（包括项目）的官方政策或立场。

用户发送的消息由其自行负责，用户将对因在消息中写入的内容或因消息中写入的内容直接导致的任何诽谤或诉讼承担全部责任、义务和过错。项目对用户发送的任何消息不承担责任。

#### 不承担责任声明

在任何情况下，项目或其供应商均不对因您访问或使用服务或无法访问或使用服务而产生的任何特殊、偶然、间接或后果性损害承担责任。

#### "使用风险自负"免责声明

服务中的所有信息均按"原样"提供，不保证完整性、准确性、及时性或使用此信息所获得的结果，也不提供任何明示或暗示的保证，包括但不限于性能、适销性和特定用途适用性的保证。

项目不对您或任何其他人因依赖服务提供的信息而做出的决定或采取的行动，或任何后果性、特殊或类似损害负责，即使已被告知可能发生此类损害。
        `,
      usernameChangedTo: '用户名已更改为"{{username}}"',
      usernameReset: '用户名已重置',
      revealUserInfo: '显示你的用户信息',
      publicKeyInfo: '你的公钥（本地生成）：',
      privateKeyInfo:
        '你的私钥也是本地生成的，它是隐藏的且只存在于你的设备上。',
      close: '关闭',
      copyCurrentUrl: '复制当前链接',
      showQRCode: '显示二维码',
      hideRoomControls: '隐藏房间控制',
      showRoomControls: '显示房间控制',
      enterFullscreen: '进入全屏',
      exitFullscreen: '退出全屏',
      fullscreen: '全屏',
      showPeerList: '点击显示用户列表',
      peerList: '用户列表',
      privateRoomUrlCopied: '已复制带密码的私人房间链接到剪贴板',
      privateRoomUrlWithoutPassCopied: '已复制不带密码的私人房间链接到剪贴板',
      currentUrlCopied: '已复制当前链接到剪贴板',
      incorrectPassword: '密码错误，请等待2秒后重试。',
      copyUrlWithPassword: '复制带密码的链接',
      simple: '简单模式',
      privateRoomUrlDescription:
        '复制包含密码不可破解哈希值的私人房间链接。使用此链接时，用户无需自行输入密码。',
      urlSharingWarning:
        '请谨慎分享此链接。任何获得链接的人都可以进入房间。分享渠道和所有潜在的链接接收者都必须是可信的，就像分享密码本身一样。',
      browserHistoryWarning:
        '根据设计，当使用此链接访问房间时，密码哈希不会离开网页浏览器。但是，浏览器仍可能独立记录地址历史中的完整链接，如果配置为这样做，甚至可能将历史记录存储在云端。',
      understandRisks: '我理解相关风险',
      password: '密码',
      copyUrlWithPasswordTooltip:
        '复制带密码的房间链接。访问房间时无需输入密码。',
      copyUrlTooltip: '复制房间链接。访问房间需要输入密码。',
      advanced: '高级选项',
      copyUrl: '复制链接',
      poweredBy: '本对话由',
      roomPassword: '房间密码',
      passwordPromptDescription:
        '你只能连接到输入相同密码的房间成员。由于 Chitchatter 的去中心化特性，无法知道你输入的密码是否与其他成员输入的密码匹配。',
      passwordMismatchWarning:
        '如果密码不匹配，你将在房间中但无法与其他人连接。不会显示错误提示。',
      hidePassword: '隐藏密码',
      showPassword: '显示密码',
      goBack: '返回',
      submit: '提交',
      microphoneVolume: '他们的麦克风音量',
      screenVolume: '他们的屏幕音量',
      volume: '音量',
      environmentUnsupported: '环境不支持',
      browserNotSupported: '你的浏览器不支持运行 Chitchatter 所需的功能。',
      requiredFeatures: '所需功能：',
      webRTC: 'WebRTC',
      webCrypto: 'Web 加密',
      indexedDB: 'IndexedDB',
      recommendedBrowsers: '推荐的浏览器：',
      connectionFailed: '连接失败',
      serverConnectionLost: '与信令服务器的连接已断开。',
      tryReconnecting: '尝试重新连接',
      newVersionAvailable: '新版本可用',
      upgradeMessage: 'Chitchatter 有新版本可用。请刷新页面以升级。',
      refresh: '刷新',
      startupIssuesDetected: 'Chitchatter 无法启动。检测到以下问题：',
      notSecureContext: '应用程序未在',
      secureContext: '安全上下文',
      webRTCNotSupported: '你的浏览器不支持 WebRTC。请考虑使用',
      useSupportedBrowser: '支持的浏览器',
      serverConnectionFailed: '服务器连接失败',
      pairingServerNotFound:
        '无法找到配对服务器。请确保你已连接到互联网。如果仍然无法连接，请尝试：',
      refreshPage: '刷新页面',
      disableAdBlocker: '禁用广告拦截器',
      tryDifferentNetwork: '连接到其他网络',
      updateNeeded: '需要更新',
      updateDescription:
        '为了正常运行，Chitchatter 需要更新。更新已在后台安装完成。你只需要重新加载页面或点击下方的"刷新"按钮即可。',
      scanQRCode: '扫描二维码',
      qrCodeDescription: '使用移动设备扫描此二维码以加入房间。',
      searchingForPeers: '正在搜索节点...',
      you: '你',
      connectionType: '连接类型',
      connectionQuality: '连接质量',
      connectionStatus: '连接状态',
      closePeerList: '关闭节点列表',
      trackerConnection: '追踪器连接',
      searchingForServers: '正在搜索服务器...',
      fullNetworkConnectionTooltip:
        '可以与所有具有完整网络连接的节点建立连接。',
      fullNetworkConnection: '完整网络连接',
      partialNetworkConnectionTooltip:
        '中继服务器不可用。只有在双方都不需要中继服务器时才能建立连接。',
      partialNetworkConnection: '部分网络连接',
      noNetworkConnectionTooltip: '配对服务器不可用。无法建立节点连接。',
      noNetworkConnection: '无网络连接',
      embeddingChitchatter: '嵌入 Chitchatter',
      iframeSnippetInstruction:
        '将此 <code>iframe</code> HTML 代码片段复制并粘贴到你的项目中：',
      advancedEmbedding: '高级嵌入',
      sdkEmbedDescription:
        '作为使用 {{iframeTag}} 的替代方案，你可以使用 {{sdkLink}} 将聊天室作为 {{webComponentLink}} 嵌入，并提供额外的配置选项：',
      turnOffMicrophone: '关闭麦克风',
      turnOnMicrophoneHint: '打开麦克风并对房间讲话（按住 ctrl + ` 讲话）',
      call: '通话',
      microphoneSelection: '麦克风选择',
      microphoneToUse: '要使用的麦克风',
      selectedMicrophone: '已选择的麦克风',
    },
  },
}
