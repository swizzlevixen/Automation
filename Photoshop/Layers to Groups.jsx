/*Layers to GroupsScript by Kukurykushttps://forums.adobe.com/message/10555610#10555610Takes each selected layer and individually puts it inside a new group.*/function sTT(v) {return stringIDToTypeID(v)}  (ref = new ActionReference()).putEnumerated  (sTT('document'), sTT('ordinal'), sTT('targetEnum'));  cnt = (lst = executeActionGet(ref).getList(sTT('targetLayersIDs'))).count    for(i = 0; i < cnt;) {       id = lst.getReference(i++).getIdentifier();       (ref1 = new ActionReference()).putClass(sTT('layerSection'));       (dsc1 = new ActionDescriptor()).putReference(sTT('null'), ref1);       (ref2 = new ActionReference()).putIdentifier(sTT('layer'), id)       dsc1.putReference(sTT('from'), ref2);       nme = executeActionGet(ref2).getString(sTT('name'));       (dsc2 = new ActionDescriptor()).putString(sTT('name'), nme)       dsc1.putObject(sTT('using'), sTT('layerSection'), dsc2)       executeAction(sTT('make'), dsc1)  }  