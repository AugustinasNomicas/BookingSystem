${
    using System.Text.RegularExpressions;
        
     
    //TODO: Manage AcceptVerbAttribute
    string Verb(Method m) {
        var v = m.Attributes.Where(a=>a.Name.StartsWith("Http")).FirstOrDefault()?.name.Remove(0, 4) ;
        if (v != null)
            return v;
            
        var acceptedVerbs = new string [] {
            "get",
            "post",
            "put",
            "delete",
            "patch",
            "head",
            "options"
        };
                
        return acceptedVerbs.FirstOrDefault(a=> m.name.StartsWith(a))??"";
    }

    string RouteRegex(string body) => @"\{" + body + @":?\w*\??\}";

    string ParameterRoute(Method m) {
        var pId = m.Parameters.FirstOrDefault(p=>p.name == "id");
       var route = Regex.Replace("", RouteRegex(@"(\w+)"), x => $"${{{x.Groups[1].Value}}}");
       

       if (pId != null && route == "")
        route = "${id}";

       var parent = m.Parent as Class;

       var controllerRoute = parent.Attributes.FirstOrDefault(a => a.Name == "Route")?.Value;
       var routePrefix = controllerRoute != null ? controllerRoute.Replace("[controller]","") : string.Empty;
       
       return routePrefix + route;
    }
    

    string Data(Method m)
    { 
        var data = m.Parameters.Where(p=>p.Attributes.Any(a=>a.Name == "FromBody")).FirstOrDefault();
        if (data != null)
            return $"{{{data}: {data}}}";
        
        data = m.Parameters.FirstOrDefault(p => !p.Type.IsPrimitive);
        return data == null ? "null" : $"{{{data}: {data}}}";
    } 

    string Params(Method m)
    { 
        var route = ""; 
      
        var parameters = m.Parameters
                .Where(p=>p.name != "id")
                .Where(p => p.Type.IsPrimitive && !Regex.IsMatch(route, RouteRegex(p)) && !p.Attributes.Any(a=>a.Name == "FromBody"))
                .Select(p => $"{p}: {p}");

        if(parameters.Any() == false)
            return "null";
            

       return $"{{ params: {{ {string.Join(", ", parameters)} }} }}";            
    }

    string HttpConfig(Method m){
        var url = ParameterRoute(m);
        var method = Verb(m);
        var parameters = Params(m);
        var data = Data(m);

        var result = $"{{ url: `{url}`, method: \"{method}\", params: {parameters}, data: {data} }}";
        result = result.Replace(", params: null", "");
        result = result.Replace(", data: null", "");

        return result;

    }

    string ServiceName(Class c){
        return c.name.Replace("Controller", "Resource");
    }

    string CalculatedType(Method m){
        string typeName = m.Type.Name;
        if (typeName.StartsWith("Task") && m.Type.IsGeneric)
            typeName = m.Type.TypeArguments.First().Name;

        if (typeName == "IHttpActionResult")
            return "void";

        return typeName;
        
    }
}
$Classes(Tourtlee.BookingSystem.Web.ApiControllers.Admin.*)[
/// <reference path="../typings/tsd.d.ts" />
'use strict';
    export class $ServiceName { 
        constructor(private $http: angular.IHttpService) {
        } $Methods[

        public $name = ($Parameters[$name: $Type][, ]) : angular.IHttpPromise<$CalculatedType> => {
            return this.$http<$CalculatedType>($HttpConfig);
        };] 
    }
    
    angular.module("admin").service("$ServiceName", ["$http", $ServiceName]);
]