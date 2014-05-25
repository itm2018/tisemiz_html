<script type="text/javascript">
				tinymce.PluginManager.load('moxiemanager', '/js/moxiemanager/plugin.min.js');

				tinymce.init({
					selector: "textarea",
					plugins: [
						"advlist autolink lists link image charmap print preview anchor",
						"searchreplace visualblocks code fullscreen",
						"insertdatetime media table contextmenu paste moxiemanager"
					],
					toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
					autosave_ask_before_unload: false,
					max_height: 200,
					min_height: 160,
					height : 180
				});
				</script>