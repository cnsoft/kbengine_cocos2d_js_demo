/*-----------------------------------------------------------------------------------------
												entity
-----------------------------------------------------------------------------------------*/
KBEngine.Avatar = KBEngine.GameObject.extend(
{
	__init__ : function()
	{
		this._super();
  	},
  		
	relive : function(type)
	{
		this.cellCall("relive", type);
  	},
  		
	useTargetSkill : function(skillID, targetID)
	{
		KBEngine.INFO_MSG(this.className + '::useTargetSkill: ' + skillID + ", targetID: " + targetID);
		this.cellCall("useTargetSkill", skillID, targetID);
  	},
  		
	jump : function()
	{
		this.cellCall("jump");
  	},  	
  		
	onJump : function()
	{
		KBEngine.INFO_MSG(this.className + '::onJump: ' + this.id); 
		KBEngine.Event.fire("otherAvatarOnJump", this);
  	},    
  		
	onAddSkill : function(skillID)
	{
		KBEngine.INFO_MSG(this.className + "::onAddSkill(" + skillID + ")"); 
		KBEngine.Event.fire("onAddSkill", this);
  	},   

	onRemoveSkill : function(skillID)
	{
		KBEngine.INFO_MSG(this.className + "::onRemoveSkill(" + skillID + ")"); 
		KBEngine.Event.fire("onRemoveSkill", this);
  	},  
  	
	onEnterWorld : function()
	{
		KBEngine.INFO_MSG(this.className + '::onEnterWorld: ' + this.id); 

		// 请求获取技能列表
		if(this.isPlayer())
		{
			KBEngine.Event.fire("onAvatarEnterWorld", KBEngine.app.entity_uuid, this.id, this);
			this.cellCall("requestPull");
		}
		
		this._super();		
	}
});


