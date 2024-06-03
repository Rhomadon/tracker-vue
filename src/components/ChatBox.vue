<template>
	<!-- Chat start -->
	<div id="chat-box">
		<div id="chat-circle" class="btn btn-raised">
			<img src="./img/chat.svg" alt="Best Google Dashboards" />
		</div>
		<div class="chat-box">
			<div class="chat-box-header">
				Chat
				<span class="chat-box-toggle"><i class="icon-close"></i></span>
			</div>
			<div class="chat-box-body">
				<div class="chat-logs">
					<div class="chat-msg self">
						<img src="./img/user2.png" class="user" alt="Google Dashboards">
						<div class="chat-msg-text">Hello</div>
					</div>
					<div class="chat-msg user">
						<img src="./img/user15.png" class="user" alt="Google Dashboards">
						<div class="chat-msg-text">Are we meeting today?</div>
					</div>
					<div class="chat-msg self">
						<img src="./img/user2.png" class="user" alt="Google Dashboards">
						<div class="chat-msg-text">Yes, what time suits you?</div>
					</div>
					<div class="chat-msg user">
						<img src="./img/user15.png" class="user" alt="Google Dashboards">
						<div class="chat-msg-text">Can we connect at 3pm?</div>
					</div>
					<div class="chat-msg self">
						<img src="./img/user2.png" class="user" alt="Google Dashboards">
						<div class="chat-msg-text">Sure, Thanks. I will send you some important files.</div>
					</div>
					<div class="chat-msg user">
						<img src="./img/user15.png" class="user" alt="Google Dashboards">
						<div class="chat-msg-text">Great. Thanks!</div>
					</div>
				</div>
			</div>
			<div class="chat-input">
				<form>
					<input type="text" id="chat-input" placeholder="Send a message..." />
					<button type="submit" class="chat-submit" id="chat-submit"><i class="icon-send"></i></button>
				</form>
			</div>
		</div>
	</div>
	<!-- Chat end -->
</template>